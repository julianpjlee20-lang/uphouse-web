module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'SaQyKaqSTHDre96L16Tzjg=='),
    },
  },
});
