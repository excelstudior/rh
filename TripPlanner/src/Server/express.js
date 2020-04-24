import express from "express";
import path from "path";
import fuel from './router/fuel';
const bodyParser = require('body-parser');
const server=express();
const isProd=process.env.NODE_ENV === 'production';
console.log("ssss",process.env.NODE_ENV)
if (!isProd){
    
    const webpack=require("webpack");
    const config=require("../../webpack.dev.js") ;
    const complier =webpack(config);
    const webpackDevMiddleware=require("webpack-dev-middleware")(
        complier,
        config.devServer
    );
    const webpackHotMiddleware=require("webpack-hot-middleware")(complier);

    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);

}
const staticMiddleware= express.static("dist");

server.use(staticMiddleware);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/fuel',fuel)
server.listen(8080,()=>{
    console.log("Serveris listineng!!")
})