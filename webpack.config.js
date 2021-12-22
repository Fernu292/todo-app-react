const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
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