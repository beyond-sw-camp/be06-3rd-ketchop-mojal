const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy:{
      "/proxy":{
        target:"http://localhost:8080",
        changeOrigin: true,
        pathRewrite:{"^/proxy": ""},
      }
    }
  },
  transpileDependencies: true
})
