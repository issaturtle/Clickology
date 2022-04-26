import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Product from "./Product";
import AddedNotification from "./AddedNotification";

import "../../css/Home.css";
import img from "../../img/withoutsticker.PNG";
import rej from "../../img/reject.gif";
import sjinx from "../../img/fullycolored.PNG";
import dog from "../../img/dog.jpg";
import anya from "../../img/anya.png";
import ape from "../../img/ape.jpg";
import random from "../../img/top.png";
import monster from "../../img/monster.jpg";
import mutant from "../../img/Mutant.png";
import { useStateVal } from "../PropStore/ContextState";
/**
 * Components used: Product.js, AddedNotification.js,
 * @returns the homepage with using
 */
function Home() {
  const [state, dispatch] = useStateVal();
  const [notifList, setList] = useState([]);
  const [product_list, set_product_list] = useState([]);
  const addToNotificationList = (name) => {
    setList((oldArray) => {
      return [...oldArray, name];
    });
  };
  const addToProductList = (name) => {
    set_product_list((oldArray) => {
      return [...oldArray, name];
    });
  };
  useEffect(() => {
    console.log(state.cart);
  }, [state.cart]);
  //not done
  // useEffect(()=>{
  // 	let elem = document.querySelectorAll('.home__contentRow')
  // 	elem.forEach((item)=>{
  // 		for(var i in item.children){
  // 			console.log(item.children[i])
  // 		}
  // 	})
  // 	// for (var i = 0; i < elem.length;  i++){
  // 	// 	console.log(elem[i]);
  // 	// }
  // },[state.searchQuery])
  const removeNotif = (name) => {
    let newList = [...notifList];

    const index = notifList.findIndex((cartItem) => cartItem === name);

    if (index >= 0) {
      newList.splice(index, 1);
    }

    setList(newList);
  };

  return (
    <>
      <div className="notifContainer">
        {notifList.map((item) => (
          <AddedNotification
            name={item}
            removeNotif={removeNotif}
            setList={setList}
            messages={notifList}
            delay={3000}
          />
        ))}
      </div>
      <div className="home">
        <div className="home__contentContainer" data-container>
          <img src={img} alt="" className="home__contentImage" />
          <div className="home__contentRow">
            <Product
              id="1"
              rating={5}
              price={12.99}
              title="Rejection"
              image={rej}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
            <Product
              id="2"
              rating={5}
              price={13.99}
              title="vaxxedDoggo"
              image={dog}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
          </div>
          {/* <div className="home__contentRow">
					<Product />
					<Product />
				</div> */}
          <div className="home__contentRow">
            <Product
              id="3"
              title="pixels"
              price={15.99}
              image={random}
              rating={10}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />

            <Product
              id="4"
              title="Powder"
              price={18.99}
              image={sjinx}
              rating={1}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
            <Product
              id="5"
              title="Anya"
              price={14.99}
              image={anya}
              rating={1}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
            <Product
              id="6"
              rating={5}
              price={11.99}
              title="mutant"
              image={mutant}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
            <Product
              id="7"
              rating={5}
              price={11.99}
              title="Bored Ape"
              image={ape}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
          </div>
          <div className="home__contentRow">
            <Product
              id="8"
              title="Jinx"
              price={50.99}
              image={img}
              rating={10}
              addedToCartNotif={addToNotificationList}
              addToProductList={addToProductList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
