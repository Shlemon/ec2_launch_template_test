const express = require('express');

// routes
const artists = require('./routes/artist.js').routes;

// define api
const api = express();

// api config
api.use(express.json());

// index page
api.get("/", async (req, res) => {
    res.send('API Gateway')
})

// inject routes
api.use("/artist", artists);

const PORT = 5000;
api.listen(PORT, () => console.log(`Server listening on port ${PORT}\nhttp://localhost:${PORT}`));