const proxy = require('http-proxy-middleware'); //搭建脚手架时候已下载

module.exports = function (app) {
    app.use(
        proxy('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000', //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host的指定
            pathRewrite: { '^/api1': '' }, //重写请求路径(必须)
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathReWrite: { '^/api2': '' }
        }),
    )
}