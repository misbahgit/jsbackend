//console.log("Chai aur Code");
require('dotenv').config()
const express=require('express')
const app=express()
const port=2000
app.get('/',(req,res)=>{
    res.send('Hello world!')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})
app.get('/twitter',(req,res)=>{
    res.send('Misbah@twitter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>subscribe to kodeguru.co.in</h1>')
})