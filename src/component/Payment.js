import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { useStateVal } from './ContextState';
import './css/Payment.css';
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
					</div>
					<div className="total">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab,
						ipsum exercitationem facilis corrupti quidem in itaque dolorum
						numquam. Quis tempora nesciunt, et natus officiis unde ad qui rem
						at!
					</div>
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
