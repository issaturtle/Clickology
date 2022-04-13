import React from 'react';
import './css/Totalamount.css';
import CurrencyFormat from 'react-currency-format';
import { useStateVal } from './ContextState';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { calculateCart } from './Reducer';
function Totalamount() {
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
			<CurrencyFormat
				renderText={(value) => (
					<p>
						subtotal ({state.cart.length} items): <strong>{value}</strong>
					</p>
				)}
				decimalScale={2}
				value={calculateCart(state.cart)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Totalamount;
