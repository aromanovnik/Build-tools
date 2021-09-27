const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const resolve = dir => path.join(__dirname, '..', dir);
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        'main': ['./src/main'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.js/.test(file)
                ),
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Lesson 2',
        //     filename: './index.html'
        // }),
        new CopyPlugin({
            patterns: [
                {from: "assets", to: "assets"},
                {from: "index.html", to: "index.html"},
            ],
        }),
    ]
};
