const axios = require('axios');

module.exports.search = async (req, res) => {
    const { query, type } = req.query; // `type`: 'pincode' or 'branch'
    try {
        const url =
            type === 'pincode'
                ? `https://api.postalpincode.in/pincode/${query}`
                : `https://api.postalpincode.in/postoffice/${query}`;

        const response = await axios.get(url);

        if (response.data[0].Status === 'Success') {
            const results = response.data[0].PostOffice;
            res.render('search', { results, query, type, error: null });
        } else {
            res.render('search', { results: [], query, type, error: 'No records found' });
        }
    } catch (error) {
        res.render('search', { results: [], query, type, error: 'Something went wrong!' });
    }
};