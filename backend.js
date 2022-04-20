const port = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const Taxjar = require('taxjar');
const app = express();

app.get('/', (req, resp) => {
	const client = new Taxjar({
		apiKey: '1cc4abb6a6df746676ed01d9300e42cf',
	});

	client
		.taxForOrder({
			from_country: 'US',
			from_zip: '92093',
			from_state: 'CA',
			from_city: 'La Jolla',
			from_street: '9500 Gilman Drive',
			to_country: 'US',
			to_zip: '90002',
			to_state: 'CA',
			to_city: 'Los Angeles',
			to_street: '1335 E 103rd St',
			amount: 15,
			shipping: 1.5,
			nexus_addresses: [
				{
					id: 'Main Location',
					country: 'US',
					zip: '95122',
					state: 'CA',
					city: 'San jose',
					street: '2113 interbay drive',
				},
			],
			line_items: [
				{
					id: '1',
					quantity: 1,
					product_tax_code: '20010',
					unit_price: 15,
					discount: 0,
				},
			],
		})
		.then((res) => {
			res.tax; // Tax object
			resp.json(res.tax); // Amount to collect
		});
});
app.listen(port, () => console.log(`server running on port ${port}`));
