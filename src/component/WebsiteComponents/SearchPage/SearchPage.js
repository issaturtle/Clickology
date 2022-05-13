import React from "react";
import { Link, useParams } from "react-router-dom";
import CartProduct from "../CheckoutPage/CartProduct";
import { useStateVal } from "../PropStore/ContextState";
/**
 * Get search query and send item to CartProduct component for render
 * @returns The search page with CartProduct components
 */
function SearchPage() {
  const [state, dispatch] = useStateVal();
  const param = useParams();

  return (
    <div className="searchPage">
      <h1>Searched: {param.query}</h1>
      <div className="searchPage__products">
        {state.productList.map((item) => {
          if (item.title?.toLowerCase().includes(param.query.toLowerCase())) {
            return (
              <Link
                to={{ pathname: "/product/" + item.id, state: state }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CartProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  productList={true}
                  hideRemove={true}
                />
              </Link>
            );
          }
          return;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
