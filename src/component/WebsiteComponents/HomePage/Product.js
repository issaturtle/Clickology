import React, { useEffect } from "react";

import { useStateVal } from "../PropStore/ContextState";

import "../../css/Product.css";
import img from "../../img/reject.gif";
import jinx from "../../img/fullycolored.PNG";
import longjinx from "../../img/withoutsticker.PNG";
import { Link } from "react-router-dom";

/**
 *
 * @param {id, rating, price, title, image, addedToCartNotif }
 * @returns A product on the homepage
 */
// <<<<<<< newPayment
// function Product({
//   id,
//   rating,
//   price,
//   title,
//   image,
//   addedToCartNotif,
//   addToProductList,
// }) {
//   const [state, dispatch] = useStateVal();
//   useEffect(() => {
//     addToProductList(title);
//   }, []);
//   function addCart() {
//     dispatch({
//       type: "ADD_CART",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//         amount: 1,
//       },
//     });

//     addedToCartNotif(title);
//   }
//   return (
//     <div className="product zoom">
//       <img src={image} alt="" />
//       <div className="product__information">
//         <p className="product__name">{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__handRating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>👏</p>
//             ))}
//         </div>
//       </div>

//       <button onClick={addCart}>
//         <h4>Add to Cart</h4>
//       </button>
//     </div>
//   );
// =======
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
  const [state, dispatch] = useStateVal();
  useEffect(() => {
    addToProductList(title);
  }, []);
  function addCart() {
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
    addedToCartNotif(title);
  }
  return (
    <div className="product zoom">
      <div className="product__container">
        <Link to={{ pathname: "/product/" + id, state: state }}>
          <img src={image} alt="" height="200" />
        </Link>
        <div className="product__information">
          <Link to="">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </Link>
          <div className="product__handRating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>👏</p>
              ))}
            {id}
          </div>
        </div>
      </div>

      <button onClick={addCart}>
        <h4>Add to Cart</h4>
      </button>
    </div>
  );
}

export default Product;
