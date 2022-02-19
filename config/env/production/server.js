module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['STRAPI_KEY1', 'STRAPI_KEY2']),
  },
});
