const mongoose = require("mongoose");

const mongdbURL = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(mongdbURL);

const db = mongoose.connection;

db.on("connected", () => console.log("Connected to MongoDB server"));

db.on("error", (error) => console.log("MongoDB connection error", error));

db.on("disconnected", () => console.log("MongoDB server disconnected"));

module.exports = db;
