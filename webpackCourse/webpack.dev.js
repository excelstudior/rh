const path=require('path');
const webpack=require("webpack");
const HTMLWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        index:["core-js/fn/promise",'./src/index.js']
    },
    mode:'development',
    output:{
        filename:'[name]-bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
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
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                    //     loader:'file-loader',
                    //     options:{
                    //         name:"[name].html"
                    //     }
                    // },{
                    //     loader:'extract-loader'
                    // },{
                        loader:'html-loader',
                        options:{
                            attributes:{
                                list:[
                                    {
                                        tag:'img',
                                        attribute:'src',
                                        type:'src'
                                    },
                                    {
                                        tag:'body',
                                        attribute:'background-image',
                                        type:'src'
                                    }
                                ]
                            }
                        }
                    }
                    
                ]
            },{
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
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        })
    ]

}