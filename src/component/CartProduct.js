import React from 'react';
import './css/CartProduct.css';
function CartProduct({ id, rating, price, title, image }) {
	return (
		<div className="cartProduct">
			<img className="cartProduct__image" src={image} alt="" />
			<div className="cartProduct__info">
				<p className="cartProduct__title">{title}</p>
				<p className="cartProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="cartProduct__rating">
					{/* fill array with rating then map each number to hand */}
					{Array(rating)
						.fill()
						.map(() => (
							<p>👏</p>
						))}
				</div>
				<button className="cartProduct__btn">Remove from cart</button>
			</div>
		</div>
	);
}

export default CartProduct;
