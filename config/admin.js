module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a2a4571ff2300dc8f99b87dd2015287d'),
  },
});
