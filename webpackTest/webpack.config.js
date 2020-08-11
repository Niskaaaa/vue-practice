//配置文件路径
const path = require('path'); 
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',//打包文件入口
    output:{
        path: path.resolve(__dirname,'dist'),//出口
        filename:'bundle.js'
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index123.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//sass同理
            {test:/\.{jpg|png|gif|bmp|jpeg}$/,use:'url-loader'},
            {test:/\.{ttf|eot|svg|woff|woff2}$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }



}