import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/Home.css';
import Product from './Product';
import img from './img/withoutsticker.PNG';
import rej from './img/reject.gif';
import sjinx from './img/fullycolored.PNG';
import AddedNotification from './AddedNotification';

function Home() {
	const [notifList, setList] = useState([]);

	const test = (name) => {
		setList((oldArray) => {
			return [...oldArray, name];
		});
	};
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
				<div className="home__contentContainer">
					<img src={img} alt="" className="home__contentImage" />
					<div className="home__contentRow">
						<Product
							id="1"
							rating={5}
							price={11.69}
							title="NFT"
							image={rej}
							test={test}
						/>
						<Product
							id="2"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
							test={test}
						/>
					</div>
					{/* <div className="home__contentRow">
					<Product />
					<Product />
				</div> */}
					<div className="home__contentRow">
						<Product
							id="2"
							title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
							price={6969}
							image={img}
							rating={10}
							test={test}
						/>

						<Product
							id="3"
							title="onsectetur adipisicing elit. Impedit, nihil."
							price={6933}
							image={sjinx}
							rating={1}
						/>
						<Product
							id="4"
							title="onsectetur Impedit, nihil."
							price={3}
							image={img}
							rating={1}
						/>
						<Product
							id="2"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
							test={test}
						/>
						<Product
							id="2"
							rating={5}
							price={11.69}
							title="temp1"
							image={rej}
							test={test}
						/>
					</div>
					<div className="home__contentRow">
						<Product
							id="5"
							title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil."
							price={6969}
							image={img}
							rating={10}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
