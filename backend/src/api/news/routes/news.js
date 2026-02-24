module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/news',
      handler: 'news.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/news/:id',
      handler: 'news.findOne',
      config: { policies: [] },
    },
    {
      method: 'POST',
      path: '/news',
      handler: 'news.create',
      config: { policies: [] },
    },
  ],
};
