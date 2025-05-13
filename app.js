const express=require('express');
const server=express();
const libraryRouter=require('./routes/library.js');
const userRouter=require('./routes/users.js');
const orderRouter=require('./routes/orders.js');
const productRouter=require('./routes/products.js');
const categoryRouter=require('./routes/categories.js');
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

server.use('/lib',libraryRouter);
server.use('/users',userRouter);
server.use('/orders',orderRouter);
server.use('/products',productRouter);
server.use('/categories',categoryRouter);
//Question-Routes



// e-commerce routes 

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