// system
const express = require('express');
// routes and vars
const routes = express.Router();
const baseUrl = "http://localhost:5000";

// GET ALL artist
routes.get("/", async (req, res) => {
    res.status(200).send('Hello there');
})

module.exports = {
    routes: routes,
};