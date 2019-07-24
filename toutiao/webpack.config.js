const path=require('path');
const uglify=require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin=require('html-webpack-plugin');
const autoprefixer=require('autoprefixer');
const miniCssExtractPlugin=require('mini-css-extract-plugin');

const config={
    mode:'development',
    entry:{
        index:path.resolve(__dirname,'./src/js/index/js')
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
                exclued:path.resolve(__dirname,'node_moudules'),
                query:{
                    'preset':['lasest']
                }
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
                    'style-loader',
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
    }

}
module.exports=config;