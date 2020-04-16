// require("babel-runtime/regenerator");
// require("@babel/register");
// require("webpack-hot-middleware/client?reload=true");
require("./app.js");
require("./index.css");
require("./index.html");
var a =async args =>{
    const {a,b}=args;
    await console.log(`Hello from babel, you are now in ${process.env.NODE_ENV} `);
    console.log("Done");
    
}
a({a:1,b:2})