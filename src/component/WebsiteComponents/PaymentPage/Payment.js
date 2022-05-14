//library imports
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Form } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
//component imports
import CartProduct from "../CheckoutPage/CartProduct";
import { useStateVal } from "../PropStore/ContextState";
import {
  calculateCart,
  calculate_cart,
  calculate_cart_length,
} from "../PropStore/Reducer";
import stripeAxios from "./StripeAxios";
import { dbase } from "../LoginPage/firebase";
//css
import "../../css/Payment.css";
import command from "nodemon/lib/config/command";

/**
 * Renders the payment page
 * Uses Stripe and Geocode to verify address and payments.
 * @returns
 */
function Payment() {
  const [state, dispatch] = useStateVal();
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [userError, setuserError] = useState(null);
  const [disableCardInput, setdisableCardInput] = useState(true);
  const [successfulCard, setSuccessfulCard] = useState(null);
  const [processingCard, setProcessingCard] = useState("");
  const [clientCardSecret, setclientCardSecret] = useState(true);
  const [fullName, set_full_name] = useState("");
  const [address, set_address] = useState("");
  const [city, set_city] = useState("");
  const [user_state, set_user_state] = useState("");
  const [zipcode, set_zipcode] = useState("");
  const stripeElements = useElements();
  const stripeClient = useStripe();
  const navigate = useNavigate();

  /**
   * Set the status of card
   * @param {SyntheticEvent} e
   *
   */
  const handleCardChange = (e) => {
    setdisableCardInput(e.empty);
    setuserError(e.error ? e.error.message : "");
  };
  /**
   * call firebase server to return a client secret for payment
   */
  const getClientScrt = async () => {
    const res = await stripeAxios({
      method: "post",
      url: `/payment/create?total=${
        parseFloat(calculate_cart(state.cart) + 3).toPrecision(2) * 100
      }`,
    });
    setclientCardSecret(res.data.clientSecret);
  };
  /**
   * call firebase to verify valid address
   * @returns {string} res The status of address's validity
   */
  async function verifyAddress() {
    const res = await stripeAxios({
      method: "post",
      url: "/verifyAddress",
      params: {
        address: address,
        city: city,
        state: user_state,
      },
    });
    return res;
  }
  /**
   * if valid address + valid card, confirmation request will be sent
   * store user's purchase details in database
   */
  async function confirmPayment() {
    const payWithStripe = await stripeClient
      .confirmCardPayment(clientCardSecret, {
        payment_method: {
          card: stripeElements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        dbase
          .collection("users")
          .doc(state.userN?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: state.cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            buyer_info: {
              fullName: fullName,
              address: address,
              city: city,
              state: user_state,
              zipcode: zipcode,
            },
          });
        setSuccessfulCard(true);
        setuserError(null);
        setProcessingCard(false);
        set_full_name("");
        set_user_state("");
        set_city("");
        set_zipcode("");
        set_address("");
        dispatch({
          type: "EMPTY_CART",
        });
        navigate("/");
      });
  }
  /**
   * Wrapper class
   * On submission, address and card checking will be called
   * if there's an error with either one, return error
   *
   * @param {SyntheticEvent} e
   */
  async function handleCardSubmit(e) {
    e.preventDefault();
    setProcessingCard(true);
    // verifyAddress().then((status) => {
    //   if (status === "OK") {
    //     confirmPayment();
    //   } else {
    //     console.log("wrong address retar");
    //   }
    // });
    const status = await verifyAddress();
    // console.log(status.data.status);
    if (status.data.status === "OK") {
      // console.log(status.data.status);
      confirmPayment();
    } else if (status.data.status === "ZERO_RESULTS") {
      console.log(status.data.status);
      console.log(document.querySelector("payment"));
      document.getElementById("error").setAttribute("class", "form error");
      setProcessingCard(false);
    }
  }

  useEffect(() => {
    getClientScrt();
    setCartLength(() => calculate_cart_length(state.cart));
    setCartTotal(() => calculate_cart(state.cart));
  }, [state.cart]);

  return (
    <div className="payment">
      <div className="payment__ContainerLeft">
        <h1>
          Checkout (
          <Link to="/checkout" className="payment__CartItems">
            {cartLength > 1 ? `${cartLength} items` : `${cartLength} item`}
          </Link>
          )
        </h1>
        <div className="payment__ContainerLeft__Details">
          <div className="payment__Title">
            <h3 id="error" className="form">
              Delivery address
            </h3>
          </div>
          <div className="payment__Addr form">
            <Form>
              <Form.Group className="form">
                <Form.Label>Full name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Full name"
                  className="inputform payment__Form__Input "
                  onChange={(e) => {
                    set_full_name(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="form">
                <Form.Label>Address (or PO Box)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address (or PO Box)"
                  className="inputform payment__Form__Input "
                  onChange={(e) => {
                    set_address(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="form">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  className="inputform payment__Form__Input "
                  onChange={(e) => {
                    set_city(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="form">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  className="inputform payment__Form__Input "
                  onChange={(e) => {
                    set_user_state(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="form">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip code"
                  className="inputform payment__Form__Input "
                  onChange={(e) => {
                    set_zipcode(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="separator"></div>
        <div className="payment__ContainerLeft__Details">
          <div className="payment__Title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__System">
            <form onSubmit={handleCardSubmit}>
              <CardElement onChange={handleCardChange} />
              <button
                disabled={processingCard || disableCardInput || successfulCard}
                className="payment__Orderbtn"
              >
                <span>{processingCard ? <p>Processing</p> : "Buy Now"}</span>
              </button>

              {userError && <div>{userError}</div>}
            </form>
          </div>
        </div>
      </div>
      <div className="payment__ContainerRight">
        <div className="payment__Details">
          <h1>Your Total</h1>
          <div className="payment__block">
            <table className="payment__Prices">
              <tr>
                <td className="payment__Prices__Topics">
                  Total before tax (
                  {state.cart.length > 1
                    ? `${state.cart.length} items`
                    : `${state.cart.length} item`}
                  ):{" "}
                </td>
                <td className="payment__Prices__Nums">{cartTotal}</td>
              </tr>
              <tr>
                <td>
                  Shipping fees:
                  <td>
                    <h7>ground shipping</h7>
                  </td>{" "}
                </td>
                <td className="payment__Prices__Nums">$3</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td className="payment__Prices__Nums__Last">$1</td>
              </tr>
              <tr>
                <td>
                  <h2 className="payment__Prices__Total">Order Total:</h2>
                </td>
                <td>
                  <h2 className="payment__Prices__Total">
                    <CurrencyFormat
                      renderText={(value) => (
                        <p>
                          <strong>{value}</strong>
                        </p>
                      )}
                      decimalScale={2}
                      value={calculate_cart(state.cart) + 3}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </h2>
                </td>
              </tr>
              <tr></tr>
            </table>
          </div>
          <div className="separator"></div>

          <div className="payment__Title">
            <h1>Your Cart</h1>
          </div>
          <div className="payment__Cartitems">
            {state.cart.map((item) => (
              <CartProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Payment;
