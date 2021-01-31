const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production'; // Saber se está em produção

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
