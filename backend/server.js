const express = require('express');
const cors= require('cors');
const products= require('./data/ProductList.js')
const app= express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send('App is running');
})
app.get('/api/product',(req,res)=>{
    res.json(products);
})
app.get('/api/product/:id',(req,res)=>{
    const product= products.find((p)=>
        p.id===req.params.id)
        res.json(product)
    
    
})
app.listen(5000);