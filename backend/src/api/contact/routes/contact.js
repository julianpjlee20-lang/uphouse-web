module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/contacts',
      handler: 'contact.find',
      config: { policies: [] },
    },
    {
      method: 'POST',
      path: '/contacts',
      handler: 'contact.create',
      config: { policies: [] },
    },
  ],
};
