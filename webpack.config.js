var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var BUILD = path.resolve(__dirname, 'build');
var APP = path.resolve(__dirname, 'app');
var JS = path.resolve(APP, 'javascript');

module.exports = {
    entry: `${JS}/index.jsx`,
    devtool: 'inline-source-map',
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

    devServer: {
        port: 3000,
        hot: true,
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true
    },

    output: {
        filename: 'javascript/[name]-[hash].js',
        path: BUILD,
        publicPath: '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(JS, 'index.html'),
            inject: 'body',
            filename: `${BUILD}/index.html`
        }),
    ],
    resolve: {
         extensions: ['.js', '.jsx', '.sass']
    }

}
