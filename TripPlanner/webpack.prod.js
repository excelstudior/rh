const path=require('path');
const webpack=require("webpack");
const cssNano=require('cssnano');
const htmlWebpackPlugin=require("html-webpack-plugin");
const autoprefixer=require('autoprefixer');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const minifyPlugin=require('babel-minify-webpack-plugin');
const uglifyJSPlugin=require('uglifyjs-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname,'src');
const OUTPUT_DIR = path.resolve(__dirname,'dist');

const client={
    entry:{
        index:path.join(SOURCE_DIR,'index.js')
    },
    mode:'production',
    output:{
        filename:'bundle.js',
        path:OUTPUT_DIR,
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
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return[autoprefixer('last 5 versions')]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.ejs$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(jpg|gif|png|jpeg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: './src/images/favicons/' , to: OUTPUT_DIR, },
           // { from: './Static/Image' , to: path.resolve(__dirname+'/dist/Static/Image'), }

        ]),
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
            template:'./src/index.ejs',
            title:'GO GO Amingo',
            excludeChunks:["node-moudules"],
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new uglifyJSPlugin()
    ],
    resolve:{
        alias:{
            tpnswConfig:path.resolve(__dirname,'src/Config/tpnsw.js'),
            fuelConfig:path.resolve(__dirname,'src/Config/fuel.js'),
            appText:path.resolve(__dirname,'src/App/constants.js'),
            apiEndpoints:path.resolve(__dirname,'src/Api/endPoints.js'),
        }
    }
}

module.exports=[client]