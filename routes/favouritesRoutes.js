const express = require('express');
const { addFavourite, getAllFavourites } = require('../controllers/favouritesController');

const router = express.Router();

router.post('/favourites', addFavourite);
router.get('/favourites', getAllFavourites);

module.exports = router;
