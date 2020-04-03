import express from "express";
import path from "path";

const server=express();

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
const staticMiddleware= express.static("dist");

server.use(staticMiddleware);

server.listen(8080,()=>{
    console.log("Serveris listineng!!")
})