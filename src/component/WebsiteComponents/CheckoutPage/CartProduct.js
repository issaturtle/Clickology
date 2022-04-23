//library
import React from 'react';
import { useStateVal } from '../PropStore/ContextState';
//css
import '../../css/CartProduct.css';
/**
 *
 * @param {id, rating,price, title, image}
 * @returns the product in cart within checkout page
 */
function CartProduct({ id, rating, price, title, image }) {
	//"store" for props
	const [state, dispatch] = useStateVal();

	//send request to "store" to remove item from cart
	const removeCart = () => {
		dispatch({
			type: 'REMOVE_CART',
			id: id,
		});
	};
	return (
		<>
			<div className="cartProduct">
				<img className="cartProduct__image" src={image} alt="" />
				<div className="cartProduct__info">
					<div className="test">
						<p className="cartProduct__title">{title}</p>
						<div className="cartProduct__rating">
							{/* fill array with rating then map each number to hand */}
							{Array(rating)
								.fill()
								.map(() => (
									<p>👏</p>
								))}
						</div>
					</div>
					<div>
						<p className="cartProduct__price">
							<small>$</small>
							<strong>{price}</strong>
						</p>
						<button onClick={removeCart} className="cartProduct__btn">
							Remove from cart
						</button>
					</div>
				</div>
			</div>
			<div className="nextItem"></div>
		</>
	);
}

export default CartProduct;
