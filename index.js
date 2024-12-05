const express = require('express');
const app = express();
const searchRoutes = require('./routes/searchRoutes');
const favouritesRoutes = require('./routes/favouritesRoutes');
const cors = require('cors');
require("./config/mysql");
require("./models/index");

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Update these routes to avoid conflicts
app.use('/', searchRoutes);
app.use('/', favouritesRoutes);


// // Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the slashash_assignment API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


