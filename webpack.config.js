const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
    process.env.API_KEY = process.env.API_KEY_DEVELOP;
    process.env.SHEETS_ID = process.env.SHEETS_ID_DEVELOP;
} else {
    process.env.API_KEY = process.env.API_KEY_PRODUCTION;
    process.env.SHEETS_ID = process.env.SHEETS_ID_PRODUCTION;
}

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env': {
        API_KEY: JSON.stringify(process.env.API_KEY),
        SHEETS_ID: JSON.stringify(process.env.SHEETS_ID)
    }
});
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    inject: 'body',
    key: process.env.API_KEY
});
const ScriptExtHtmlWebpackPluginConfig = new ScriptExtHtmlWebpackPlugin({
    inline: 'app'
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

    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

    devServer: {
        contentBase: 'app'
    },

    plugins: [
        HTMLWebpackPluginConfig,
        ScriptExtHtmlWebpackPluginConfig,
        DefinePluginConfig
    ]
};
if (process.env.NODE_ENV !== 'production') {
    module.exports.devtool = 'inline-source-map';
}
