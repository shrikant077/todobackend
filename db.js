const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = "mongodb+srv://enotescloud:h1jCaCvXg31eXpYI@cluster0.pdfy9ng.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected Successfully to Mongo")
    }).catch((e) => {
        console.log(e.message)
    })
}
module.exports = connectToMongo;
