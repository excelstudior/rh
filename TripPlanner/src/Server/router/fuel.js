const express = require('express');
const router = express.Router();

router.get('/prices',(req,res)=>{
console.log('Price Checking...')
    let headers={};
    headers.apikey =req.body.headers.apikey;
    headers.transactionid=req.body.headers.transactionid;
    headers['Content-Type']=req.body.headers['Content-Type'];
    headers.Authorization=req.body.headers.Authorization;
    console.log(headers);
    return res.json({message:'Getting all prices!!!'})
})

module.exports=router;