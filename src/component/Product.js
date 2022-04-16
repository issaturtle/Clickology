import React from 'react';
import './css/Product.css';
import img from './img/reject.gif';
import jinx from './img/fullycolored.PNG';
import longjinx from './img/withoutsticker.PNG';
import { useStateVal } from './ContextState';
function Product({ id, rating, price, title, image, test }) {
	const [state, dispatch] = useStateVal();
	const [added, setstatus] = useStateVal(false);
	function addCart() {
		dispatch({
			type: 'ADD_CART',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
		test(title);
	}
	return (
		<div className="product zoom">
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

			<button onClick={addCart}>
				<h4>Add to Cart</h4>
			</button>
		</div>
	);
}

export default Product;
