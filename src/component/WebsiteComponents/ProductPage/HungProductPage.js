import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../css/Productpage.css";
import { useStateVal } from "../PropStore/ContextState";
const str = "../../img/monster.jpg";
function HungProductPage() {
  const [state, dispatch] = useStateVal();
  const param = useParams();
  const [images, setImage] = useState("");
  const [productValues, setProductValues] = useState({
    id: -1,
    image: "",
    desc: "",
    price: 0,
    rating: 0,
    title: "",
    reviews: [],
  });
  const addTocart = () => {
    dispatch({
      type: "ADD_CART",
      item: {
        id: productValues.id,
        title: productValues.title,
        desc: productValues.desc,
        image: productValues.image,
        price: productValues.price,
        rating: productValues.rating,
        amount: 1,
      },
    });
  };
  useEffect(() => {
    // const getProduct = async () => {
    //   const res = await stripeAxios({
    //     method: "post",
    //     url: `/product/?id=${param.id}`,
    //   }).then((resp) => {
    //     setImage(("../../img", true));
    //     setProductValues({
    //       id: resp.data.id,
    //       image: resp.data.image,
    //     });
    //   });
    const getProduct = async () => {
      setProductValues({
        id: state.productList[param.id].id,
        image: state.productList[param.id].image,
        desc: state.productList[param.id].desc,
        price: state.productList[param.id].price,
        rating: state.productList[param.id].rating,
        title: state.productList[param.id].title,
        reviews: state.productList[param.id].reviews,
      });
    };

    getProduct();
  }, []);
  return (
    <div className="productpage">
      <div className="productpage__container">
        <div className="productpage__containerLeft">
          <div className="productpage__containerLeftContent">
            <div>
              <img
                src={productValues.image}
                className="productpage__containerImage zoompp"
                alt=""
              />
            </div>
            {/* <div>
              <h1>Product id: {productValues.id}</h1>
            </div> */}
          </div>
        </div>

        <div className="productpage__containerRight">
          <div className="productpage__containerRightContent">
            <div className="productpage__containerRightName">
              <h1>{productValues.title}</h1>
            </div>
            <div className="productpage__containerRightRating">
              {Array(productValues.rating)
                .fill()
                .map((_, i) => (
                  <p>👏</p>
                ))}
            </div>
            <div className="productpage__containerRightPrice">
              <h2>${productValues.price}</h2>
            </div>
            <div className="productpage__containerRightDesc">
              <div className="productpage__containerRightDescHeader">
                <h1>Details</h1>
              </div>
              <div className="productpage__containerRightDescTitle">
                <p>{productValues.title}</p>
              </div>
              <div className="productpage__containerRightDescDescription">
                <ul>
                  <li>
                    Flex on the haters now with your own personal, physical NFT
                  </li>
                  <li>Available only for a limited time </li>
                  <li>Will be shipped within 1 business day </li>
                </ul>
                <div className="divider"></div>
                <p>Product Id: {productValues.id}</p>
              </div>
            </div>

            <div className="productpage__containerRightBtn">
              <div>
                <p>Quantity: 1</p>
              </div>
              <div>
                <button onClick={addTocart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productpage__review">
        <h1>REVIEWS</h1>
        <div className="divider"></div>
        {productValues.reviews.length > 0 ? (
          productValues.reviews.map((item) => (
            <>
              <div className="productpage__userReview">
                <div>
                  <strong>{item.user}</strong>
                </div>
                <div>{item.user_review}</div>
              </div>
              <div className="divider"></div>
            </>
          ))
        ) : (
          <div>
            <p style={{ color: "gray" }}>
              Be the first to review <strong>{productValues.title}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HungProductPage;
