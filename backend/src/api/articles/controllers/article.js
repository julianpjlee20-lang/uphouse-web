module.exports = {
  async find(ctx) {
    return strapi.entityService.findMany('api::articles.article', ctx.query);
  },
  async findOne(ctx) {
    return strapi.entityService.findOne('api::articles.article', ctx.params.id, ctx.query);
  },
  async create(ctx) {
    return strapi.entityService.create('api::articles.article', {
      data: ctx.request.body,
    });
  },
};
