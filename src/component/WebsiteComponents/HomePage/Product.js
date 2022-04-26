import React, { useEffect } from 'react';

import { useStateVal } from '../PropStore/ContextState';

import '../../css/Product.css';
import img from '../../img/reject.gif';
import jinx from '../../img/fullycolored.PNG';
import longjinx from '../../img/withoutsticker.PNG';
import { Link } from 'react-router-dom';

/**
 *
 * @param {id, rating, price, title, image, addedToCartNotif }
 * @returns A product on the homepage
 */
function Product({ id, rating, price, title, desc, image, addedToCartNotif,addToProductList }) {
	const [state, dispatch] = useStateVal();
	useEffect(()=>{
		addToProductList(title);
	},[])
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
			<Link to= {{pathname: "/product/" + id, 
						state: state}}>	
				<img src={image} alt="" width = "200" height="200" />
			</Link>
			<div className="product__information">
				<Link to="">	
					<p>{title}</p>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
				</Link>
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

export default Product;
