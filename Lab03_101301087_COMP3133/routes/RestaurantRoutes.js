import express from 'express';
import {Restaurant} from "../models/RestaurantSchema.js";

export const restaurantRoutes = express();

restaurantRoutes.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

restaurantRoutes.get('/restaurants/:cuisine', async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        console.log(`Cuisine: ${cuisine}`);
        const restaurants = await Restaurant.find({cuisine: cuisine});
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

restaurantRoutes.get('/restaurant-sort', async (req, res) => {
    try {
        const sortBy = req.query.sortBy === 'ASC' ? 1 : -1;
        const restaurants = await Restaurant.find({})
            .select('city cuisine name restaurant_id')
            .sort({'restaurant_id': sortBy});
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

restaurantRoutes.get('/restaurant/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            $and:[
                {cuisine: 'Delicatessen'},
                {city: {$ne: 'Brooklyn'}}
            ]
        })
            .select('cuisine name city');
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});
