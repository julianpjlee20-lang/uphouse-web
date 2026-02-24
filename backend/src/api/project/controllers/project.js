module.exports = {
  async find(ctx) {
    return strapi.entityService.findMany('api::project.project', ctx.query);
  },
  async findOne(ctx) {
    return strapi.entityService.findOne('api::project.project', ctx.params.id, ctx.query);
  },
  async create(ctx) {
    return strapi.entityService.create('api::project.project', {
      data: ctx.request.body,
    });
  },
  async update(ctx) {
    return strapi.entityService.update('api::project.project', ctx.params.id, {
      data: ctx.request.body,
    });
  },
  async delete(ctx) {
    return strapi.entityService.delete('api::project.project', ctx.params.id);
  },
};
