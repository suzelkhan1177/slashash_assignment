
# SLASHASH Assignment
This project is a web application that allows users to search for postal PIN codes or post office branch names in India, and save their favorite post office details. The application fetches post office details from the Postal PIN Code API and provides functionality to save and view favorites in the database.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS Engine
- **Database**: MySQL

## Search Page URL
The  Search Page URL  is available at:  [http://localhost:3000/search](http://localhost:3000/search)

<div> 
  <img src="https://github.com/user-attachments/assets/60517732-5c5e-4f0c-a742-8026e6e41482" width="500" height="250px">
</div>


##  Favourites Page URL
The   Favourites Page URL  is available at:  [http://localhost:3000/favourites](http://localhost:3000/favourites)


<div> 
  <img src="https://github.com/user-attachments/assets/219148a0-483d-4777-90ca-31840ed9e0e1" width="550" height="150px">
</div>

## Favourites Table

| Column           | Type             | Constraints                 |
| :----------------|:-----------------|:----------------------------|
| `id`             | `INT`            | Primary Key, Auto Increment | 
| `name`           | `VARCHAR(255)`   | NOT NULL                    |
| `branch_type`    |  `VARCHAR(255)`  |                             |
| `delivery_status`|  `VARCHAR(255)`  |                             |
| `district`       |  `VARCHAR(255)`  |                             |
| `region`         |  `VARCHAR(255)`  |                             |
| `state `         |  `VARCHAR(255)`  |                             |
| `gender`         | `VARCHAR(255)`   |                             |


