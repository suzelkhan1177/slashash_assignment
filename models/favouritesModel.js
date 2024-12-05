const pool = require('../config/mysql');

async function createFavouritesTable() {
  try {
    const [rows] = await pool.query("SHOW TABLES LIKE 'favourites';");

    if (rows.length === 0) {
      const createTableQuery = `
      CREATE TABLE favourites (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        branch_type VARCHAR(255),
        delivery_status VARCHAR(50),
        district VARCHAR(255),
        region VARCHAR(255),
        state VARCHAR(255)
      );`;

      await pool.query(createTableQuery);
      console.log('Favourites table created successfully');
    } else {
      // console.log('Favourites table already exists');
    }
  } catch (error) {
    console.error('Error creating favourites table: ' + error.message);
  }
}

createFavouritesTable();
