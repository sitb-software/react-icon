/*eslint-disable no-var */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
        if (fs.statSync(path.join(__dirname, dir)).isDirectory())
            entries[dir] = path.join(__dirname, dir, 'app.js');
        return entries;
    }, {}),

    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.less$/,
                loader: `style-loader!css-loader!less-loader`
            }, {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            }, {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            }, {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }, {
                test: /\.(woff|eot|ttf)/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]

};
