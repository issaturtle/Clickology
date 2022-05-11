//library
import React, { useEffect, useState } from "react";
import { useStateVal } from "../PropStore/ContextState";
import { Link } from "react-router-dom";
//css
import "../../css/CartProduct.css";
import { find_product_index_cart } from "../PropStore/Reducer";
/**
 *
 * @param {id, rating,price, title, image}
 * @returns the product in cart within checkout page
 */
function CartProduct({
  id,
  rating,
  price,
  title,
  image,
  hideRemove = false,
  amountHistory = false,
  amount = -1,
  productList = false,
}) {
  //"store" for props
  const [pQuantity, setQuantity] = useState("");
  const [state, dispatch] = useStateVal();
  const createQuantity = () => {
    if (productList === true) {
      setQuantity("");
    } else if (amountHistory === true) {
      setQuantity(
        <p>
          Quantity:<strong>{amount}</strong>{" "}
        </p>
      );
    } else {
      setQuantity(
        <p>
          Quantity: <strong>{find_product_index_cart(state.cart, id)}</strong>
        </p>
      );
    }
  };
  useEffect(() => {
    createQuantity();
  }, [state.cart]);
  //send request to "store" to remove item from cart
  const removeCart = () => {
    dispatch({
      type: "REMOVE_CART",
      id: id,
    });
  };
  return (
    <>
      <div className="cartProduct">
        <Link to={{ pathname: "/product/" + id, state: state }}>
          <img className="cartProduct__image" src={image} alt="" />
        </Link>

        <div className="cartProduct__info">
          <div className="test">
            <p className="cartProduct__title">{title}</p>
            <div className="cartProduct__rating">
              {/* fill array with rating then map each number to hand */}
              {Array(rating)
                .fill()
                .map(() => (
                  <p>👏</p>
                ))}
            </div>
          </div>
          <div>
            <p className="cartProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>

            {/* {amountHistory === true ? (
              <p>
                Quantity:<strong>{amount}</strong>{" "}
              </p>
            ) : (
              <p>
                Quantity:{" "}
                <strong>
                  {state.cart[find_product_index_cart(state.cart, id)].amount}
                </strong>
              </p>
            )} */}
            {pQuantity}
            {hideRemove === true ? (
              ""
            ) : (
              <button onClick={removeCart} className="cartProduct__btn">
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="nextItem"></div>
    </>
  );
}

export default CartProduct;
