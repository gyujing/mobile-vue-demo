const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    }
  },
  // 为将vantdd组件px转rem，使用postcss-px2rem-exclude
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 75, // 根据设计稿的尺寸和实际需求进行调整，保持与 postcss.config.js 中的一致
            // exclude: /node_modules|vant/i, // 排除不需要转换的文件或文件夹，保持与 postcss.config.js 中的一致
          }),
        ],
      },
    },
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('scss')
  //     .test(/\.scss$/)
  //     .oneOf('vue')
  //     .use('px2rem-loader')
  //     .loader('px2rem-loader')
  //     .before('postcss-loader') // this makes it work.
  //     .options({ remUnit: 75, remPrecision: 8 })
  //     .end()
  // },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  },
  lintOnSave: false
}
