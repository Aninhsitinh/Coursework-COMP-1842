const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

devServer: {
    // Chuyển hướng tất cả các yêu cầu không phải file tĩnh sang backend
    proxy: 'http://localhost:3000' 
  }
})