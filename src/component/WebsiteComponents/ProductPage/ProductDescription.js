import React from 'react';
import '../../css/ProductDescription.css';
import img from '../../img/reject.gif';
import jinx from '../../img/fullycolored.PNG';
import longjinx from '../../img/withoutsticker.PNG';
import { useStateVal } from '../PropStore/ContextState';
import { Link } from 'react-router-dom';
/**
 *
 * @param {id, rating, price, title, image, addedToCartNotif }
 * @returns A product on the homepage
 */
function ProductDescription({ id, rating, price, title, desc, image, addedToCartNotif }) {
	
	const [state, dispatch] = useStateVal();

	function addCart() {
		dispatch({
			type: 'ADD_CART',
			item: {
				id: id,
				title: title,
				desc: desc,
				image: image,
				price: price,
				rating: rating,
			},
		});
		addedToCartNotif(title);
	}
	return (			
		<div className="product zoom">
			<img src={image} alt="" width = "200" height="200" />
			<div className="product__information">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}
                    {desc}
                    </strong>
                </p>
				<div className="product__handRating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>👏</p>
						))}
					{id}
				</div>
				
			</div>
			<button onClick={addCart}>
				<h4>Add to Cart</h4>
			</button>
		</div>
		
	);
}

export default ProductDescription;