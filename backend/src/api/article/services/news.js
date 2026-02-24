module.exports = {
  find(params, options) {
    return strapi.entityService.findMany('api::news.news', params, options);
  },
  findOne(id, params, options) {
    return strapi.entityService.findOne('api::news.news', id, params, options);
  },
  create(data, options) {
    return strapi.entityService.create('api::news.news', { data, ...options });
  },
};
