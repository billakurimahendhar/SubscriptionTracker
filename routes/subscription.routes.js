import express from 'express';
import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';
import { getUserSubscriptions } from '../controllers/subscription.controller.js';
const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'get all subcriptions' });
});


subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: 'get subcription' });
});


subscriptionRouter.post('/', authorize,createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'update subcriptions' });
});
subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'delete subcriptions'  });
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'cancel subscription' });
});
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'get upcoming renewals' });
});
export default subscriptionRouter;
