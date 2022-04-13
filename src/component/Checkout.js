import React from 'react';
import CartProduct from './CartProduct';
import { useStateVal } from './ContextState';
import './css/Checkout.css';
import img from './img/withoutsticker.PNG';
import img2 from './img/fullycolored.PNG';
import Totalamount from './Totalamount';
function Checkout() {
	const [state, dispatch] = useStateVal();
	return (
		<div className="checkOut">
			<div className="checkOut__Price">
				<Totalamount />
			</div>
			<div className="checkOut__Items">
				<img src={img} alt="" className="checkOut__Ad" />
				<div>
					<h2 className="checkOut__title">Your Cart</h2>
					{/* {state.cart.map((item) => (
						<CartProduct
							id={item.id}
							title={item.title}
							price={item.price}
							image={item.image}
							rating={item.rating}
						/>
					))} */}
					<CartProduct
						id="1234"
						title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
						image={img2}
						price={69}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
