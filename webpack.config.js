var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./app/index.js",
    output: {
        output: { path: __dirname, filename: 'app.js' },
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
