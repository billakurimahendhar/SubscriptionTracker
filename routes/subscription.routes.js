import express from 'express';
import { Router } from "express";
const subscriptionRouter = Router();
subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'get all subcriptions' });
});
subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: 'get subcription' });
});
subscriptionRouter.post('/', (req, res) => {
    res.send({ title: 'create subscription' });
});
subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'update subcriptions' });
});
subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'delete subcriptions' });
});
subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'get all  subcriptions of user' });
});
subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'cancel subscription' });
});
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'get upcoming renewals' });
});
export default subscriptionRouter;
