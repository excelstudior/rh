const path=require('path');
const webpack=require('webpack');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin=require('html-webpack-plugin');
const autoprefixer=require('autoprefixer');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config={
    mode:'development',
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),
            new UglifyJsPlugin({
                cache:true,
                sourceMap:true
            })
        ]
    },
    entry:{
        index:[path.resolve(__dirname,'./src/js/index.js')],
        detail:[path.resolve(__dirname,'./src/js/detail.js')],
        collections:[path.resolve(__dirname,'./src/js/collections.js')],
    },

    output:{
        path:path.resolve(__dirname+'/dist'),
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:[
                    path.resolve(__dirname,'src')
                ],
                exclude:path.resolve(__dirname,'node_moudules'),
                options:{
                    presets:['@babel/preset-env','@babel/preset-react'],
                    plugins:['@babel/plugin-proposal-class-properties',
                    "@babel/plugin-transform-runtime",
                    "@babel/plugin-transform-spread"],
                }
                // query:{
                //     'preset':['lasest']
                // }
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:miniCssExtractPlugin.loader,
                        options:{
                        hmr:process.env.NODE_ENV==='development'
                        }   
                    },
                    // 'style-loader',///load to style header, miniCssExtractPlugin will be ignored
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return[autoprefixer('last 5 versions')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|git|ico)$/i,
                loader:[
                    'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        // new webpack.ProvidePlugin({
        //     '$':'zepto'
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: './assets' , to: path.resolve(__dirname+'/dist/scripts'), }
        ]),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            title:"Headline",
            chunksSortMode:"manual",
            chunks:["index"],
            excludeChunks:["node-moudules"],
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new htmlWebpackPlugin({
            filename:'detail.html',
            template:'./src/detail.html',
            title:"Detail",
            chunksSortMode:"manual",
            chunks:["detail"],
            excludeChunks:["node-moudules"],
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new htmlWebpackPlugin({
            filename:'collections.html',
            template:'./src/collections.html',
            title:"Collections",
            chunksSortMode:"manual",
            chunks:["collections"],
            excludeChunks:["node-moudules"],
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new miniCssExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    devtool:'eval-source-map',
    devServer:{
        watchOptions:{
            ignored:'node_moudules'
        },
        contentBase:path.resolve(__dirname,"dist"),
        port:3000,
        host:'localhost',
        overlay:true,
        compress:true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    }

};
module.exports=config;