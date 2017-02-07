const path = require("path");
const Utility = require("../util/Utility");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const sourcePath = path.resolve(__dirname, '../../src');

var env = null;
for(var i = 0 ; i <  process.argv.length; i++) {
    if(process.argv[i].startsWith("--env")) {
        env = process.argv[i].split("=")[1];
    }
}
if(!env) {
    env = "production";
}
console.log(env);
if(env === "dev-json-server") {
    const JsonServer = require("../server/JsonServer");
    JsonServer.createJsonServer(3000, "config/data/db.json");
}

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
        path: path.resolve(Utility.projectDir, 'build'),
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
            { from: path.resolve(Utility.projectDir, 'assets'), to: './' },
        ]),
        new webpack.DefinePlugin({
            NODE_ENV:  JSON.stringify(env)
        })
    ]
};
