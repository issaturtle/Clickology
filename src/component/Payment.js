import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { useStateVal } from './ContextState';
import './css/Payment.css';
import { calculateCart } from './Reducer';
import CurrencyFormat from 'react-currency-format';
function Payment() {
	const [state, dispatch] = useStateVal();
	return (
		<div className="payment">
			<div className="payment__ContainerLeft">
				<h1>
					Checkout (<Link to="/checkout">{state.cart?.length} items</Link>)
				</h1>
				<div className="payment__Details">
					<div className="payment__Title">
						<h3>Delivery address</h3>
					</div>
					<div className="payment__Addr">
						<p>{state.user?.email}</p>
						<p>69 lanes</p>
						<p>420, ca</p>
					</div>
				</div>

				<div className="payment__Details">
					<div className="payment__Title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__System"></div>
				</div>
			</div>
			<div className="payment__ContainerRight">
				<div className="payment__Details">
					<div className="payment__Title">
						<h1>Your Total</h1>
						<p>
							<CurrencyFormat
								renderText={(value) => (
									<p>
										Subtotal ({state.cart.length} items):{' '}
										<strong>{value}</strong>
									</p>
								)}
								decimalScale={2}
								value={calculateCart(state.cart)}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'$'}
							/>
						</p>
						<p>Tax</p>
					</div>
					<div className="total"></div>
					<div className="payment__Title">
						<h1>Your Cart</h1>
					</div>
					<div className="payment__Cartitems">
						{state.cart.map((item) => (
							<CartProduct
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Payment;
