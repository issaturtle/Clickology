import React from 'react';
import './css/Product.css';
import img from './reject.gif';
import jinx from './fullycolored.PNG';
function Product() {
	return (
		<div className="product">
			<div className="product__information">
				<p>NFT</p>
				<p className="product__price">
					<small>$</small>
					<strong>11.69</strong>
				</p>
				<div className="product__handRating">
					<p>👏</p>
				</div>
			</div>
			<img src={jinx} alt="" />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
