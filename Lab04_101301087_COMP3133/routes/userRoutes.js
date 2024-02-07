import express from 'express';
import {User} from "../models/Users.js";

export const userRoutes = express();

userRoutes.post('/users', async (req, res) => {
    const reqUser = req.body;

    try {
        let newUser = new User({...reqUser});
        console.log('Saving user');

        await newUser.save();
        res.status(201).json(newUser);
    } catch (e) {
        console.log(e);
        res.send(500).json(e);
    }

})