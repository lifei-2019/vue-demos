module.exports = {
  outputDir: 'distlf',
  publicPath: './',
  devServer: {
    port: 8080,
    // proxy: {/**处理跨域，本地代理转发*/
    //     '/internal': {
    //         target: 'http://192.168.2.75:9501/',  // 接口域名
    //         secure: false,  // 如果是https接口，需要配置这个参数
    //         changeOrigin: true,  //是否跨域}
    //     },
    // },
  }
}