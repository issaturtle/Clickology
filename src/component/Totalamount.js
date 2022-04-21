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
	const checkLoggedIn = () => {
		console.log('hi');
		console.log(state.userN);
		if (state.userN != null && state.cart.length >= 1) {
			navigateHistory('/payment');
		} else if (state.cart.length >= 1 && state.userN == null) {
			navigateHistory('/login');
		} else {
			document.getElementById('temp').disabled = true;
			document.getElementById('temp').classList.add('disabled');
		}
	};
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
			{}
			{state.cart.length === 0 ? (
				<button onClick={checkLoggedIn} disabled className="disabled">
					<h4>Proceed to checkout</h4>
				</button>
			) : (
				<button onClick={checkLoggedIn}>
					<h4>Proceed to checkout</h4>
				</button>
			)}
			{/* <button id="temp" onClick={checkLoggedIn}>
				<h4>Proceed to checkout</h4>
			</button> */}
		</div>
	);
}

export default Totalamount;
