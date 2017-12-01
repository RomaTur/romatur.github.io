const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const devEnv = 'development'
const NODE_ENV = process.env.NODE_ENV || devEnv
const isDev = NODE_ENV === devEnv

module.exports = {
    entry: ['babel-polyfill', './src/js/app.js'],
    devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
    output: {
        path: path.resolve(__dirname, 'build/js/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: isDev ? [] : [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build')
    }
}
