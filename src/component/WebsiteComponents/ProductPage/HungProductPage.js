import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArchiveIcon from "@mui/icons-material/Archive";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../../css/Productpage.css";
import { useStateVal } from "../PropStore/ContextState";
const str = "../../img/monster.jpg";
/**
 * Return a product page based on product id
 *
 */
function HungProductPage() {
  const [state, dispatch] = useStateVal();
  const param = useParams();
  const [images, setImage] = useState("");
  const [overlayStatus, setoverlayStatus] = useState(false);
  const [productValues, setProductValues] = useState({
    id: -1,
    image: "",
    desc: "",
    price: 0,
    rating: 0,
    title: "",
    reviews: [],
    amount: 1,
  });
  let timer;
  /**
   * Sends "ADD_CART" to reducer
   */
  function addTocart() {
    timer = setTimeout(() => {
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
    }, 0);
  }
  /**
   * Turns on overlay when clicked on "Return Policy" button
   */
  const turnOverlay = () => {
    if (overlayStatus === false) {
      setoverlayStatus(true);
      document.getElementById("overlay").style.display = "block";
    } else {
      setoverlayStatus(false);
      document.getElementById("overlay").style.display = "none";
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setProductValues({
        id: state.productList[param.id].id,
        image: state.productList[param.id].image,
        desc: state.productList[param.id].desc,
        price: state.productList[param.id].price,
        rating: state.productList[param.id].rating,
        title: state.productList[param.id].title,
        reviews: state.productList[param.id].reviews,
        amount: 1,
      });
    };

    getProduct();
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div id="overlay" onClick={turnOverlay}>
        <div className="content">
          <h1>Return policy</h1>
          <p>
            you dont but please contact{" "}
            <a href="mailto:1234@gmail.com" style={{ color: "black" }}>
              1234@gmail.com
            </a>{" "}
            for more information
          </p>
        </div>
      </div>

      <div className="productpage">
        <div className="productpage__overlay"></div>
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
                      Flex on the haters now with your own personal, physical
                      NFT
                    </li>
                    <li>Available only for a limited time </li>
                    <li>Will be shipped within 1 business day </li>
                  </ul>
                  <div className="divider__productPage"></div>
                  <p>Product Id: {productValues.id}</p>
                </div>
              </div>

              <div className="productpage__containerRightBtn">
                <div>
                  <p>Quantity: 1</p>
                </div>
                <div>
                  <button onClick={addTocart}>
                    <div style={{ paddingRight: 3 }}>
                      <ShoppingBasketIcon />
                    </div>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="productpage__containerRightBtn mid">
                <div>
                  <button onClick={turnOverlay}>
                    <div style={{ paddingRight: 3 }}>
                      <ArchiveIcon />
                    </div>
                    Return Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productpage__review">
          <h1>REVIEWS</h1>
          <div className="divider__productPage"></div>
          {productValues.reviews.length > 0 ? (
            productValues.reviews.map((item) => (
              <>
                <div className="productpage__userReview">
                  <div>
                    <strong>{item.user}</strong>
                  </div>
                  <div>{item.user_review}</div>
                </div>
                <div className="divider__productPage"></div>
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
    </>
  );
}

export default HungProductPage;
