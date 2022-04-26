import React from "react";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useState, useEffect } from "react";
import { render } from "react-dom";

import { useStateVal } from "../PropStore/ContextState";
import {
  calculateCart,
  calculate_cart,
  calculate_cart_length,
} from "../PropStore/Reducer";

import "../../css/Totalamount.css";
/**
 * totalAmount component that returns the total amount and the payment button
 * @returns the total amount in the checkout page
 */
function Totalamount() {
  const navigateHistory = useNavigate();
  const [state, dispatch] = useStateVal();

  const checkLoggedIn = () => {
    console.log("hi");
    console.log(state.userN);
    if (state.userN != null && state.cart.length >= 1) {
      //   fetch("/create-checkout-session", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({}),
      navigateHistory("/payment");
    } else if (state.cart.length >= 1 && state.userN == null) {
      navigateHistory("/login");
    } else {
      document.getElementById("temp").disabled = true;
      document.getElementById("temp").classList.add("disabled");
    }
  };
  return (
    <div className="totalAmount">
      <h2>Your shopping cart</h2>
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({calculate_cart_length(state.cart)} items):{" "}
            <strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={calculate_cart(state.cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {}
      {state.cart.length === 0 ? (
        <button onClick={checkLoggedIn} disabled className="disabled">
          <h4>Proceed to checkout</h4>
        </button>
      ) : (
        <button onClick={checkLoggedIn}>
          <h4>Proceed to checkout</h4>
        </button>
      )}
    </div>
  );
}

export default Totalamount;
