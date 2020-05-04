const path=require('path');
const htmlWebpackPlugin=require("html-webpack-plugin");
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer=require('autoprefixer');
const webpack=require('webpack');
const SOURCE_DIR = path.resolve(__dirname,'src');
const OUTPUT_DIR = path.resolve(__dirname,'dist');
module.exports={
    entry:{
        index:[
            'babel-runtime/regenerator'
            ,'@babel/register'
            ,'webpack-hot-middleware/client?reload=true'
            ,
            './src/index.js']
    },
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'cheap-module-source-map',
    devServer:{
       contentBase:'dist',
       overlay:true,
       hot:true,
       stats:{colors:true},
        // port:8080,
        // host:'localhost',
        // overlay:true,
        // compress:true,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        //   }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    { loader:'babel-loader' }
                ],
                exclude:/node_moudules/
            },
            {
                test:/\.css$/,
                use:[
                    { loader:'style-loader' },
                    { loader:'css-loader' },
                    { loader:'postcss-loader',
                      options:{
                          plugins:function(){
                              return[autoprefixer('last 5 versions')]
                          }
                      }
                    },
                ]
            },
            {
                test:/\.ejs$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'image/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:"./src/index.ejs",
            title:"GO GO Amingo",
            excludeChunks:["node-moudules"],
            favicon: './src/images/favicons/favicon.ico',
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
    ],
    resolve:{
        alias:{
            tpnswConfig:path.resolve(__dirname,'src/Config/tpnsw.js'),
            fuelConfig:path.resolve(__dirname,'src/Config/fuel.js'),
            googleConfig:path.resolve(__dirname,'src/Config/google.js'),
            appText:path.resolve(__dirname,'src/App/constants.js'),
            apiEndpoints:path.resolve(__dirname,'src/Api/endPoints.js'),
            
        }
    }
}