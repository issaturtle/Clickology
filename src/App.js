import "./App.css";
import ProductDescription from "./component/WebsiteComponents/ProductPage/ProductDescription";
import Product from "./component/WebsiteComponents/ProductPage/ProductDescription";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import img from "./component/img/withoutsticker.PNG";

import Checkout from "./component/WebsiteComponents/CheckoutPage/Checkout";
import Login from "./component/WebsiteComponents/LoginPage/Login";
import { authen } from "./component/WebsiteComponents/LoginPage/firebase";
import { useStateVal } from "./component/WebsiteComponents/PropStore/ContextState";
import Payment from "./component/WebsiteComponents/PaymentPage/Payment";
import Orders from "./component/WebsiteComponents/OrderPage/Orders";
import Header from "./component/WebsiteComponents/Header/Header";
import Home from "./component/WebsiteComponents/HomePage/Home";
import HungProductPage from "./component/WebsiteComponents/ProductPage/HungProductPage";
import Footer from "./component/WebsiteComponents/Footer/Footer";
import "./App.css";
import SearchPage from "./component/WebsiteComponents/SearchPage/SearchPage";
const stripeClient = loadStripe(
  "pk_test_51KquBTJ0wGZ0mBp51JdztrUS50BXLMqIyOIyw3RAMVgjMnzSLLe4lqgvZqt7SP2vIaZaUZufqrup5grkKksgHg2d00KNhxo7OL"
);
function App() {
  const [state, dispatch] = useStateVal();

  useEffect(() => {
    const fetchAuthen = async () => {
      authen.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch({
            type: "SET_STATE_USER",
            userN: authUser,
          });
        } else {
          dispatch({
            type: "SET_STATE_USER",
            userN: null,
          });
        }
      });
    };
    fetchAuthen();
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={stripeClient}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/order"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/product/:id"
            // component={ProductDescription}
            element={
              <>
                <Header />
                <HungProductPage />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/searchPage/:query"
            // component={ProductDescription}
            element={
              <>
                <Header />
                <SearchPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
