var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD = path.resolve(__dirname, 'build');
var APP = path.resolve(__dirname, 'app');
var JS = path.resolve(APP, 'javascript');

module.exports = {
    entry: `${JS}/index.jsx`,

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },

    output: {
        filename: 'javascript/[name]-[hash].js',
        path: BUILD,
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(JS, 'index.html'),
            inject: 'body',
            filename: `${BUILD}/index.html`
        })
    ],
    resolve: {
         extensions: ['.js', '.jsx', '.sass']
    }

}
