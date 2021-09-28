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
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|mp3|mp4)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 15
                            }
                        }
                    },
                ],
            }
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
                // {from: "assets", to: "assets"},
                {from: "index.html", to: "index.html"},
            ],
        }),
    ]
};
