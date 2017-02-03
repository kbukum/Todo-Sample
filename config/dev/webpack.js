const path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const sourcePath = path.resolve(__dirname, '../../src');


module.exports = {
    context: path.resolve(__dirname, '../../src'),
    devtool: "source-map",
    entry: {
        app: "./index.js",
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [
            '.js',
            '.jsx',
            '.json'
        ],
        enforceExtension: false
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../../assets'), to: './' },
        ])
    ]
};