const express=require('express');
const app=express();
var bodyParser = require('body-parser');
const cors = require('cors');
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
app.use(cors());

app.get('/test',(req,res)=>{
    res.json('test11');
    console.log('1');
});



app.listen(4040);