const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("Conectare DB cu succes!"))
    .catch((err) => {
        console.log(err);
    });

app.get("/api/test", () => {
    console.log("Test cu succes!");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Back end server is running !");
});