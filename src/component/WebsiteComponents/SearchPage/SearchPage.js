import React from "react";
import { useParams } from "react-router-dom";
import CartProduct from "../CheckoutPage/CartProduct";
import { useStateVal } from "../PropStore/ContextState";

function SearchPage() {
  const [state, dispatch] = useStateVal();
  const param = useParams();

  return (
    <div className="searchPage">
      <h1>Searched: {param.query}</h1>
      <div className="searchPage__products">
        {/* {state.productList.forEach((item) => {
          if (item.title?.toLowerCase() === param.query.toLowerCase()) {
            return (
              <CartProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          }
        })} */}
        {state.productList.map((item) => {
          //   if (item.title?.toLowerCase() === param.query.toLowerCase()) {
          //     return (
          //       <CartProduct
          //         id={item.id}
          //         title={item.title}
          //         price={item.price}
          //         image={item.image}
          //         rating={item.rating}
          //         productList={true}
          //         hideRemove={true}
          //       />
          //     );
          //   }
          if (item.title?.toLowerCase().includes(param.query.toLowerCase())) {
            return (
              <CartProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                productList={true}
                hideRemove={true}
              />
            );
          }
          return;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
