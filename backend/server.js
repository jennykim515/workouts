require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

const app = express();
// gives access to request body
app.use(express.json())
// fire for every request that comes in
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests after connecting to database
        app.listen(process.env.PORT, () => {
            console.log("connected to database and listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })


