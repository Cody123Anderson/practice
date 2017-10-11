const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 8 versions']
    })
  ]
};
