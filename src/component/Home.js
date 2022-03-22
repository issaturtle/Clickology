import React from 'react';
import './css/Home.css';
import Product from './Product';
import img from './withoutsticker.PNG';
function Home() {
	return (
		<div className="home">
			<div className="home__contentContainer">
				<img src={img} alt="" className="home__contentImage" />
				<div className="home__contentRow">
					<Product />
				</div>
				<div className="home__contentRow">
					{/* <product></product>
				<product></product> */}
				</div>
				<div className="home__contentRow">
					{/* <product></product>
				<product></product> */}
				</div>
			</div>
			<div>
				<h1>hi</h1>
			</div>
		</div>
	);
}

export default Home;
