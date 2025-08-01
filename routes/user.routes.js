import express from "express";
import { Router } from "express";
const userRouter = Router();
userRouter.get('/',(req,res)=>{
    res.send({title: ''});
});
userRouter.get('/:id',(req,res)=>{
    res.send({title: 'Get user Details'});
});
userRouter.post('/',(req,res)=>{
    res.send({title: 'Create new user'});
});
userRouter.put('/:id',(req,res)=>{
    res.send({title: 'Update user Details'});
});
userRouter.delete('/:id',(req,res)=>{
    res.send({title: 'Delete user'});
});
export default userRouter;