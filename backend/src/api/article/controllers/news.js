module.exports = {
  async find(ctx) {
    return strapi.entityService.findMany('api::news.news', ctx.query);
  },
  async findOne(ctx) {
    return strapi.entityService.findOne('api::news.news', ctx.params.id, ctx.query);
  },
  async create(ctx) {
    return strapi.entityService.create('api::news.news', {
      data: ctx.request.body,
    });
  },
};
