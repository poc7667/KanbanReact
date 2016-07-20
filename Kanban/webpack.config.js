module.exports = {
    entry: './index.js',
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
    }
}
