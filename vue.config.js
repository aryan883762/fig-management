// vue.config.js

module.exports = {
  // options...
  productionSourceMap: false,

  devServer: {
    disableHostCheck: true
  },
  css: {

    loaderOptions: {
      // pass options to sass-loader
      sass: {
      }
    }
  },

  lintOnSave: true

};
