const express=require('express');
const server=express();
const port=3000;
server.use((req,res,next)=>{
    console.log("authentication middleware is called")
    next();
})
// logging middleware 
server.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`)
    next();
})
//dynamic route
server.get('/welcome/:username',(req,res,next)=>{
const {username}=req.params;
const {role}=req.query;
res.send(`<h1>Welcome ${username}! your role is ${role}</h1>`)
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
// e-commerce routes 
server.get('/products',(req,res)=>{
    res.send('<h1>Here is the list of all products.</h1>');
})
server.post('/products',(req,res)=>{
    res.send('<h1>A new product has been added.</h1>');
})
server.get('/categories',(req,res)=>{
    res.send('<h1>Here is the list of all categories.</h1>');
})
server.post('/categories',(req,res)=>{
    res.send('<h1>A new category has been added.</h1>');
})
server.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});
server.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`)
})