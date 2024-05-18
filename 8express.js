const express = require('express');
const app = express();

app.get('', (req,res)=>{
    const name = req.query.name; 
    res.send("Hello, this is home page... <br>Data(?name: ....) sent is "+ name);
    // console.log(req.query)
})

app.get('/about', (req,res)=>{
    res.send("Hello This is about page.")
})

app.listen(3000);