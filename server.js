const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello From '+ process.env.DOCKER1 + " " + process.env.DOCKER2);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
