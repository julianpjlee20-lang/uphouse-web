module.exports = {
  async find(ctx) {
    return strapi.entityService.findMany('api::contact.contact', ctx.query);
  },
  async create(ctx) {
    return strapi.entityService.create('api::contact.contact', {
      data: ctx.request.body,
    });
  },
};
