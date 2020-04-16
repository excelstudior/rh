const path=require('path');
const webpack=require("webpack");
const cssNano=require('cssnano');
const htmlWebpackPlugin=require("html-webpack-plugin");
const autoprefixer=require('autoprefixer');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const minifyPlugin=require('babel-minify-webpack-plugin');
const uglifyJSPlugin=require('uglifyjs-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname,'src');
const OUTPUT_DIR = path.resolve(__dirname,'dist');

module.exports={
    entry:{
        index:path.join(SOURCE_DIR,'index.js')
    },
    mode:'production',
    output:{
        filename:'bundle.js',
        path:OUTPUT_DIR,
    },
    devServer:{
        contentBase:'dist',
        overlay:true,
        stats:{colors:true}
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude:/node_modules/
            },
            
            {
                test:/\.css$/,
                use:[
                    {
                        loader:miniCssExtractPlugin.loader
                    },
                    {
                        loader:"css-loader",
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            plugins:function(){
                                return[autoprefixer('last 5 versions')]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                loader:'ejs-loader'
            },
           
            {
                test:/\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(), 
        new miniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:cssNano,
            cssProcessorOptions:{ discardComments:{
                removeAll:true
            }},
            canPrint:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new htmlWebpackPlugin({
           
            template:"./src/index.html",
            title:"Amingo"

        }),
        // new minifyPlugin(),
        new uglifyJSPlugin()
    ]

}