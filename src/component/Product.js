import React from 'react';
import './css/Product.css';
import img from './img/reject.gif';
import jinx from './img/fullycolored.PNG';
import longjinx from './img/withoutsticker.PNG';
function Product({ id, rating, price, title, image }) {
	return (
		<div className="product">
			<img src={image} alt="" />
			<div className="product__information">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__handRating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>👏</p>
						))}
				</div>
			</div>

			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
