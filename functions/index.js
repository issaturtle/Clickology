const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(
	'sk_test_51KquBTJ0wGZ0mBp5f8mdwiG1eb18HyfYKwbKMHAmLmvPeySTY6Ia8u1BuXmlbLdWOOFxKzN78cu18zMZBdzFbBw200YttCy7fJ'
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payment/create', async (req, res) => {
	const total = req.query.total;
	console.log('payment receied', total);
	const paymentInt = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});
	res.status(201).send({
		clientSecret: paymentInt.client_secret,
	});
});
exports.api = functions.https.onRequest(app);

//http function initialized (http://localhost:5001/clickology-63112/us-central1/api).
