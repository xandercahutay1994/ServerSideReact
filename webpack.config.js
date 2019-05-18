const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: './src/index.js',
    entry: './server.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //look for js or jsx file for babel to compile
                exclude: /node_modules/, //nothing happens on the files inside this folder
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ //creates our index.html file for us, includes bundle file in indexHtml
            template: './src/views/index.html'
        })
    ]
}