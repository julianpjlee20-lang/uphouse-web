module.exports = {
  register({ strapi }) {},
  
  async bootstrap({ strapi }) {
    // Set permissions for public role on startup
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      const permissions = await strapi
        .query('plugin::users-permissions.permission')
        .findMany({ where: { role: publicRole.id } });

      // Enable read access for Project, Article, Contact
      const contentTypes = ['project', 'article', 'contact'];
      
      for (const contentType of contentTypes) {
        // Find permissions for this content type
        const findPermission = permissions.find(
          p => p.action === `api::${contentType}s.${contentType}.find`
        );
        const findOnePermission = permissions.find(
          p => p.action === `api::${contentType}s.${contentType}.findOne`
        );

        // Enable find and findOne
        if (findPermission && !findPermission.enabled) {
          await strapi
            .query('plugin::users-permissions.permission')
            .update({ where: { id: findPermission.id }, data: { enabled: true } });
        }
        if (findOnePermission && !findOnePermission.enabled) {
          await strapi
            .query('plugin::users-permissions.permission')
            .update({ where: { id: findOnePermission.id }, data: { enabled: true } });
        }
      }

      console.log('✅ Public API permissions enabled');
    }
  },
};
