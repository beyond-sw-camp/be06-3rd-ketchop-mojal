const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy:{
      "/proxy":{
        target:"http://43.203.218.195", //localhost:8080
        changeOrigin: true,
        pathRewrite:{"^/proxy": ""},
      }
    }
  },
  transpileDependencies: true
})
