import React, { useEffect, useState } from "react";

import { dbase } from "../LoginPage/firebase";
import { useStateVal } from "../PropStore/ContextState";
import OrderElement from "./OrderElement";
import "../../css/Orders.css";
import { useNavigate } from "react-router-dom";
/**
 * Renders the order history page
 * passes database datas to OrderElement component
 * @returns OrderElement component
 */
function Orders() {
  const [state, dispatch] = useStateVal();
  const [orders, setOrders] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    if (state.userN) {
      //go into users db, grab user.uid, order by recently created dates, map into orders list
      dbase
        .collection("users")
        .doc(state.userN?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          return setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [state.userN]);

  return (
    <div className="orders">
      <h1>Order History</h1>

      <div className="orders__Order">
        {orders?.map((order) => (
          <OrderElement order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
