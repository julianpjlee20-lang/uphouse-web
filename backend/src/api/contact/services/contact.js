module.exports = {
  find(params, options) {
    return strapi.entityService.findMany('api::contact.contact', params, options);
  },
  create(data, options) {
    return strapi.entityService.create('api::contact.contact', { data, ...options });
  },
};
