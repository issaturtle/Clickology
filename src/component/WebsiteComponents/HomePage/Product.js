import React, { useEffect } from "react";

import { useStateVal } from "../PropStore/ContextState";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../../css/Product.css";

import { Link } from "react-router-dom";

/**
 * Component to return products of website
 * Used by the Home component
 * @param {String} id
 * @param {Int} rating
 * @param {Float} price
 * @param {String} title
 * @param {String} desc
 * @param {Image} image
 * @param {Function} addedToCartNotif
 * @param {Function} addToProductList
 *
 * @returns A product on the homepage
 */
function Product({
  id,
  rating,
  price,
  title,
  desc,
  image,
  addedToCartNotif,
  addToProductList,
}) {
  let timer;
  const [state, dispatch] = useStateVal();
  useEffect(() => {
    return () => clearTimeout(timer);
    addToProductList(title);
  }, []);

  function addCart() {
    timer = setTimeout(() => {
      dispatch({
        type: "ADD_CART",
        item: {
          id: id,
          title: title,
          desc: desc,
          image: image,
          price: price,
          rating: rating,
          amount: 1,
        },
      });
    }, 0);

    addedToCartNotif(title);
  }
  return (
    <div className="product zoom">
      <div className="product__container">
        <Link to={{ pathname: "/product/" + id, state: state }}>
          <img src={image} alt="" height="200" />
        </Link>
        <div className="product__information">
          <strong>{title}</strong>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product__handRating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>👏</p>
              ))}
          </div>
        </div>
      </div>

      <button onClick={addCart}>
        <div style={{ paddingRight: 3 }}>
          <ShoppingBasketIcon />
        </div>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
