const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    inject: 'body'
});

module.exports = {
    context: path.join(__dirname, '/src'),

    entry: {
        js: './js/entry.js'
    },

    output: {
        path: path.join(__dirname, '/app'),
        filename: './js/app.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: 'app'
    },

    plugins: [
        HTMLWebpackPluginConfig
    ]
};
