module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  port: env('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

