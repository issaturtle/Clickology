import React from "react";
import moment from "moment";
import "../../css/OrderElement.css";
import CartProduct from "../CheckoutPage/CartProduct";
import CurrencyFormat from "react-currency-format";
import { useStateVal } from "../PropStore/ContextState";
/**
 * Take in object and passes them to CartProduct component for rendering.
 * @param {Object} order Database object
 * @returns Order history with CardProduct components
 */
function OrderElement({ order }) {
  const [state, dispatch] = useStateVal();
  return (
    <div>
      <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

        <p className="order__id">
          <small>Order Id: {order.id}</small>
        </p>
        {order.data.buyer_info ? (
          <div>
            <strong>
              Ships to:{" "}
              {order.data.buyer_info.fullName.charAt(0).toUpperCase() +
                order.data.buyer_info.fullName.slice(1)}
            </strong>
            <p>
              Address:{" "}
              {order.data.buyer_info.address.charAt(0).toUpperCase() +
                order.data.buyer_info.address.slice(1) +
                ", " +
                order.data.buyer_info.city.charAt(0).toUpperCase() +
                order.data.buyer_info.city.slice(1) +
                ", " +
                order.data.buyer_info.state.toUpperCase() +
                ", " +
                order.data.buyer_info.zipcode}{" "}
            </p>
          </div>
        ) : (
          <></>
        )}
        {order.data.cart?.map((item) => (
          <CartProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            hideRemove={true}
            amountHistory={true}
            amount={item.amount}
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <h4 className="order__total">Order Total: {value}</h4>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default OrderElement;
