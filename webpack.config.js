const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader : 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: { 
                    loader : 'html-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "scss-loadernpm"
                ]
            },
            {
                test: /\.svg$/,
                use : {
                    loader: "svg-url-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()

    ],
    devServer : {
        static: {
            directory: path.join(__dirname, 'dist/')
        },
        compress: true,
        open: true,
        port: 3000
    }
}