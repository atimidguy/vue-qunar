// vue.config.js
const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.join(__dirname, "src/assets/styles")
      }
    },
    devServer: {
      proxy: {
        "/api": {
          changeOrigin: true, // needed for virtual hosted sites
          ws: true,
          target: "http://localhost:8080",
          pathRewrite: {
            "^/api": "/mock"
          }
          // pathRewrite: function(path, req) {
          //   return path.replace("/api", "/mock");
          // }
        }
      }
    }
  }
};
// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, dir)
// }
// module.exports = {
//     lintOnSave: true,
//     chainWebpack: (config)=>{
//         config.resolve.alias
//             .set('@$', resolve('src'))
//             .set('assets',resolve('src/assets'))
//             .set('components',resolve('src/components'))
//             .set('layout',resolve('src/layout'))
//             .set('base',resolve('src/base'))
//             .set('static',resolve('src/static'))
//     }
// }
