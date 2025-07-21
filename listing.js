const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/artichokes-are-arranged-on-a-white-tablecloth-UqlTt-bO9SA",
            set: (v) => (v === "" ? "https://unsplash.com/photos/artichokes-are-arranged-on-a-white-tablecloth-UqlTt-bO9SA" : v),
        },
    }, 
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;