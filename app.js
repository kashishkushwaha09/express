const express=require('express');
const server=express();
const port=3000;
server.use((req,res,next)=>{
    console.log("middleware running 1")
    next();
})
server.use((req,res,next)=>{
     console.log("middleware running 2")
     next();
})
server.use((req,res,next)=>{
    res.send('<h1>Hello World!</h1>')
})
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`)
})