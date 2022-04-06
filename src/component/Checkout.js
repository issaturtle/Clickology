import React from 'react';
import './css/Checkout.css';
import img from './img/withoutsticker.PNG';
import Totalamount from './Totalamount';
function Checkout() {
	return (
		<div className="checkOut">
			<div className="checkOut__Price">
				<Totalamount />
			</div>
			<div className="checkOut__Items">
				<img src={img} alt="" className="checkOut__Ad" />
				<div>
					<h2 className="checkOut__title">Your Cart</h2>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
