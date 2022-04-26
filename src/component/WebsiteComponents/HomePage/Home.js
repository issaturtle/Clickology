import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';
import AddedNotification from './AddedNotification';

import '../../css/Home.css';
import img from '../../img/withoutsticker.PNG';
import rej from '../../img/reject.gif';
import sjinx from '../../img/fullycolored.PNG';
import { useStateVal } from '../PropStore/ContextState';
/**
 * Components used: Product.js, AddedNotification.js,
 * @returns the homepage with using
 */
function Home() {
	const [state,dispatch] = useStateVal();
	const [notifList, setList] = useState([]);
	const [product_list, set_product_list] = useState([])
	const addToNotificationList = (name) => {
		setList((oldArray) => {
			return [...oldArray, name];
		});
	};
	const addToProductList = (name) => {
		set_product_list((oldArray) => {
			return [...oldArray,name]
		})
	}
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
					<div className="home__contentRow" >
						<Product
							id="1"
							rating={5}
							price={11.69}
							title="NFT"
							image={rej}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>
						<Product
							id="2"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
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
							title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
							price={6969}
							image={img}
							rating={10}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>

						<Product
							id="4"
							title="onsectetur adipisicing elit. Impedit, nihil."
							price={6933}
							image={sjinx}
							rating={1}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>
						<Product
							id="5"
							title="onsectetur Impedit, nihil."
							price={3}
							image={img}
							rating={1}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>
						<Product
							id="6"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>
						<Product
							id="7"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
							addedToCartNotif={addToNotificationList}
							addToProductList={addToProductList}
						/>
					</div>
					<div className="home__contentRow">
						<Product
							id="8"
							title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
							price={6969}
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
