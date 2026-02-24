module.exports = {
  find(params, options) {
    return strapi.entityService.findMany('api::articles.article', params, options);
  },
  findOne(id, params, options) {
    return strapi.entityService.findOne('api::articles.article', id, params, options);
  },
  create(data, options) {
    return strapi.entityService.create('api::articles.article', { data, ...options });
  },
};
