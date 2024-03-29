import React from "react";

import CartProduct from "./CartProduct";
import { useStateVal } from "../PropStore/ContextState";
import Totalamount from "./Totalamount";

import "../../css/Checkout.css";
import img from "../../img/withoutsticker.PNG";
import { calculate_cart_length } from "../PropStore/Reducer";

/**
 * Renders the checkout page
 * @returns Return the checkout page with all the
 * cart products
 */
function Checkout() {
  const [state, dispatch] = useStateVal();
  return (
    <div className="checkOut">
      <div className="checkOut__Price">
        <Totalamount />
      </div>
      <div className="checkOut__Items">
        <img src={img} alt="" className="checkOut__Ad" />
        <div>
          <h2 className="checkOut__title">
            Your Cart ({calculate_cart_length(state.cart)} items){" "}
          </h2>
          <div className="dividercheck"></div>
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
    </div>
  );
}

export default Checkout;
