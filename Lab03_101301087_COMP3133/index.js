import express from 'express';
import * as mongoose from 'mongoose';
import {restaurantRoutes} from "./routes/RestaurantRoutes.js";

const app = express();

mongoose.connect('mongodb://admin:password@localhost:27017/restaurant-service')
    .then(success => console.log('Successfully connected to mongodb'))
    .catch(err => console.error(`Error during mongodb connection: ${err}`));

app.use(restaurantRoutes);

app.listen(8081, () => {
    console.log('Server is running.')
})