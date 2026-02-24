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
      const contentTypes = [
        { api: 'project', type: 'project' },
        { api: 'article', type: 'article' },
        { api: 'contact', type: 'contact' }
      ];
      
      for (const { api, type } of contentTypes) {
        // Find permissions for this content type
        const findPermission = permissions.find(
          p => p.action === `api::${api}.${type}.find`
        );
        const findOnePermission = permissions.find(
          p => p.action === `api::${api}.${type}.findOne`
        );
        const createPermission = permissions.find(
          p => p.action === `api::${api}.${type}.create`
        );

        // Enable find, findOne, and create (for contact)
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
        if (createPermission && api === 'contact' && !createPermission.enabled) {
          await strapi
            .query('plugin::users-permissions.permission')
            .update({ where: { id: createPermission.id }, data: { enabled: true } });
        }
      }

      console.log('✅ Public API permissions enabled');
    }
  },
};
