var webpack = require('webpack')

module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://0.0.0.0:8081',
        // 'webpack/hot/only-dev-server',
        // 'webpack/hot/only-dev-server',
        './index.js'
        ],
    output: {
        path: './',
        filename: 'this_bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        // hot: true
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
        // new webpack.HotModuleReplacementPlugin()
    ]
}
