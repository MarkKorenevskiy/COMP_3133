import {Schema, model} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            match: [/^[a-zA-z\s]+$/gm, 'Please fill a valid city name']
        },
        zipcode: {
            type: String,
            required: true,
            match: [/^\d{5}-\d{4}/gm, 'Please fill a valid zip code']
        },
        geo: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{1}-\d{3}-\d{3}-\d{4}/gm, 'Please fill a valid phone number']
    },
    website: {
        type: String,
        required: true,
        match: [/^(http|https):\/\/\S+$/gm, 'Please fill a valid website URL']
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
})

export const User = model("User", UserSchema);