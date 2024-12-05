const db = require('../config/mysql');;

// Save a favourite to the database
module.exports.addFavourite = async (req, res) => {
    try {
        const { name, branchType, deliveryStatus, district, region, state } = req.body;

        const query = `
            INSERT INTO favourites (name, branch_type, delivery_status, district, region, state)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await db.execute(query, [name, branchType, deliveryStatus, district, region, state]);

        res.json({ status: 'success', message: 'Favourite saved successfully' });
    } catch (error) {
        console.error('Error saving favourite:', error.message);
        res.json({ status: 'error', message: 'Could not save favourite' });
    }
};

// Get all favourites from the database
module.exports.getAllFavourites = async (req, res) => {
    try {
        const query = `SELECT * FROM favourites`;
        const [favourites] = await db.execute(query);

        res.render('favourites', { favourites });
    } catch (error) {
        console.error('Error fetching favourites:', error.message);
        res.render('favourites', { favourites: [], error: 'Could not fetch favourites' });
    }
};

