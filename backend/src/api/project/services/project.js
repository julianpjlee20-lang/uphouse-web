module.exports = {
  find(params, options) {
    return strapi.entityService.findMany('api::project.project', params, options);
  },
  findOne(id, params, options) {
    return strapi.entityService.findOne('api::project.project', id, params, options);
  },
  create(data, options) {
    return strapi.entityService.create('api::project.project', { data, ...options });
  },
  update(id, data, options) {
    return strapi.entityService.update('api::project.project', id, { data, ...options });
  },
  delete(id, options) {
    return strapi.entityService.delete('api::project.project', id, options);
  },
};
