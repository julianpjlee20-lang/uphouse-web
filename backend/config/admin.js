module.exports = ({ env }) => ({
  url: env('ADMIN_URL', '/admin'),
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'admin-secret-key'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'api-token-salt'),
  },
});
