import React from 'react';
import './css/Totalamount.css';
import CurrencyFormat from 'react-currency-format';
function Totalamount() {
	return (
		<div className="totalAmount">
			<CurrencyFormat
				renderText={(value) => (
					<p>
						subtotal (0 items): <strong>{value}</strong>
					</p>
				)}
				decimalScale={2}
				value={30}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Totalamount;
