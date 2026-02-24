module.exports = {
  async find(ctx) {
    return strapi.entityService.findMany('api::article.article', ctx.query);
  },
  async findOne(ctx) {
    return strapi.entityService.findOne('api::article.article', ctx.params.id, ctx.query);
  },
  async create(ctx) {
    return strapi.entityService.create('api::article.article', {
      data: ctx.request.body,
    });
  },
};
