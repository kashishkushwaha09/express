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

//Question-Routes
server.get('/users',(req,res)=>{
     res.send('<h1>Here is the list of all users.</h1>')
})
server.get('/orders',(req,res)=>{
     res.send('<h1>Here is the list of all orders.</h1>')
})
server.post('/users',(req,res)=>{
     res.send('<h1>A new user has been added.</h1>')
})
server.post('/orders',(req,res)=>{
     res.send('<h1>A new order has been created.</h1>')
})
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`)
})