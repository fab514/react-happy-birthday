module.exports = {
    mode: 'development',
      module: {
          rules: [
            {
              test: /\.js(x?)$/,
              exclude: /(node_modules)/,
              use: {
                loader: "swc-loader"
              }
            }
          ]
        }
  };