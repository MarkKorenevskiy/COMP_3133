import {Schema, model} from "mongoose";

const RestaurantSchema = new Schema({
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    cuisine: {
        type: String,
    },
    rating: {
        type: Number,
    },
    address: {
        type: Object
    }
}, {collection: 'Restaurants'});

export const Restaurant = model('Restaurants', RestaurantSchema);