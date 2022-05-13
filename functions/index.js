const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const axiosOptions = {};
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KquBTJ0wGZ0mBp5f8mdwiG1eb18HyfYKwbKMHAmLmvPeySTY6Ia8u1BuXmlbLdWOOFxKzN78cu18zMZBdzFbBw200YttCy7fJ"
);
const googleapi = "AIzaSyChtSnAURDVuSofMtKOLf7vOyU4koekHsM";
const baseAddress = "https://maps.googleapis.com/maps/api/geocode/json";
const productList = [
  {
    id: 0,
    image: "/../../img/anya.png",
  },
];
var location = "2113 Interbay Drive, san jose, ca";
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment receied", total);
  const paymentInt = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentInt.client_secret,
  });
});
app.post("/verifyAddy", async (req, res) => {
  var address =
    req.query.address + ", " + req.query.city + ", " + req.query.state;
  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: address,
        key: "AIzaSyChtSnAURDVuSofMtKOLf7vOyU4koekHsM",
      },
    })
    .then(function (response) {
      res.status(201).send({
        status: response.data.status,
      });
      res.send(response.data.status);
      // res.send(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
  // res.send(address);
});
// app.post("/product", async (req, res) => {
//   console.log(req.query.id);
//   res.status(201).send(productList[req.query.id]);
// });
// const YOUR_DOMAIN = "http://localhost:3000";

// app.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "pr_1234",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     automatic_tax: { enabled: true },
//   });
//   console.log(session);
//   res.redirect(303, session.url);
// });
exports.api = functions.https.onRequest(app);

//http function initialized (http://localhost:5001/clickology-63112/us-central1/api).
