const express=require('express');
const server=express();
const port=3000;
server.use((req,res,next)=>{
    console.log("authentication middleware is called")
    next();
})
server.use('/welcome',(req,res,next)=>{
    req.user='Guest'
     next();
})
server.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}!</h1>`)
})
server.get('/library2',(req,res)=>{
     res.send('<h1>library 2 is opened!</h1>')
})
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`)
})