const express=require('express');
const router=express.Router();


//dynamic route
router.get('/welcome/:username',(req,res,next)=>{
const {username}=req.params;
const {role}=req.query;
res.send(`<h1>Welcome ${username}! your role is ${role}</h1>`)
})
router.get('/library2',(req,res)=>{
     res.send('<h1>library 2 is opened!</h1>')
})
module.exports = router;