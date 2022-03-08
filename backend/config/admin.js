module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b832b0272be98d24618b06e42c6bb6dd'),
  },
});
