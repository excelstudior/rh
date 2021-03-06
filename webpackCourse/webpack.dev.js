const path=require('path');
const webpack=require("webpack");
const htmlWebpackPlugin=require("html-webpack-plugin");
const autoprefixer=require('autoprefixer');
module.exports={
    entry:{
        index:['babel-runtime/regenerator'
        ,'@babel/register'
        ,'webpack-hot-middleware/client?reload=true'
        ,'./src/index.js']
    },
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:'/'
    },
    devServer:{
        contentBase:'dist',
        overlay:true,
        hot:true,
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
                    {loader:"style-loader"},
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
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
           
            template:"./src/index.html",
            title:"Amingo"

        })
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         'NODE_ENV':JSON.stringify('production')
        //     }
        // })
    ]

}