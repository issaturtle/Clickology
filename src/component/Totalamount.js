import React from 'react';
import './css/Totalamount.css';
import CurrencyFormat from 'react-currency-format';
import { useStateVal } from './ContextState';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { calculateCart } from './Reducer';
import { useNavigate } from 'react-router-dom';
function Totalamount() {
	const navigateHistory = useNavigate();
	const [state, dispatch] = useStateVal();
	// let [value, setVal] = useState(0);
	// const cartTotal = () => {
	// 	state.basket.forEach((element) => {
	// 		value += element.price;
	// 	});
	// 	setVal(value);
	// };
	// useEffect(() => {
	// 	console.log('render');
	// 	cartTotal();
	// }, []);
	// useEffect(() => {
	// 	state.basket.forEach((element) => {
	// 		value += element.price;
	// 	});
	// });
	return (
		<div className="totalAmount">
			<h2>Your shopping cart</h2>
			<CurrencyFormat
				renderText={(value) => (
					<p>
						Subtotal ({state.cart.length} items): <strong>{value}</strong>
					</p>
				)}
				decimalScale={2}
				value={calculateCart(state.cart)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button onClick={(e) => navigateHistory('/payment')}>
				<h4>Proceed to checkout</h4>
			</button>
		</div>
	);
}

export default Totalamount;
