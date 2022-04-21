import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';
import { useStateVal } from './ContextState';
import './css/Payment.css';
import { calculateCart } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import { Button, Form } from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import stripeAxios from './StripeAxios';
function Payment() {
	const [state, dispatch] = useStateVal();
	const [userError, setuserError] = useState(null);
	const [disableCardInput, setdisableCardInput] = useState(true);
	const [successfulCard, setSuccessfulCard] = useState(null);
	const [processingCard, setProcessingCard] = useState('');
	const [clientCardSecret, setclientCardSecret] = useState(true);
	const stripeElements = useElements();
	const stripeClient = useStripe();
	const navigate = useNavigate();
	const handleCardChange = (e) => {
		setdisableCardInput(e.empty);
		setuserError(e.error ? e.error.message : '');
	};
	async function handleCardSubmit(e) {
		e.preventDefault();
		setProcessingCard(true);
		const payWithStripe = await stripeClient
			.confirmCardPayment(clientCardSecret, {
				payment_method: {
					card: stripeElements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				setSuccessfulCard(true);
				setuserError(null);
				setProcessingCard(false);
				navigate('/orders');
			});
	}

	useEffect(() => {
		const getClientScrt = async () => {
			const res = await stripeAxios({
				method: 'post',
				url: `/payment/create?total=${calculateCart(state.cart) * 100}`,
			});
			setclientCardSecret(res.data.clientSecret);
		};
		getClientScrt();
	}, [state.cart]);
	console.log(clientCardSecret);
	return (
		<div className="payment">
			<div className="payment__ContainerLeft">
				<h1>
					Checkout (
					<Link to="/checkout">
						{state.cart.length > 1
							? `${state.cart.length} items`
							: `${state.cart.length} item`}
					</Link>
					)
				</h1>
				<div className="payment__ContainerLeft__Details">
					<div className="payment__Title">
						<h3 className="form">Delivery address</h3>
					</div>
					<div className="payment__Addr form">
						<Form>
							<Form.Group className="form">
								<Form.Label>Full name</Form.Label>

								<Form.Control
									type="text"
									placeholder="Full name"
									className="inputform payment__Form__Input "
								/>
							</Form.Group>
							<Form.Group className="form">
								<Form.Label>Address (or PO Box)</Form.Label>
								<Form.Control
									type="text"
									placeholder="Address (or PO Box)"
									className="inputform payment__Form__Input "
								/>
							</Form.Group>
							<Form.Group className="form">
								<Form.Label>City</Form.Label>
								<Form.Control
									type="text"
									placeholder="City"
									className="inputform payment__Form__Input "
								/>
							</Form.Group>
							<Form.Group className="form">
								<Form.Label>State</Form.Label>
								<Form.Control
									type="text"
									placeholder="State"
									className="inputform payment__Form__Input "
								/>
							</Form.Group>
							<Form.Group className="form">
								<Form.Label>Zipcode</Form.Label>
								<Form.Control
									type="text"
									placeholder="Zip code"
									className="inputform payment__Form__Input "
								/>
							</Form.Group>
						</Form>
					</div>
				</div>
				<div className="separator"></div>
				<div className="payment__ContainerLeft__Details">
					<div className="payment__Title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__System">
						<form onSubmit={handleCardSubmit}>
							<CardElement onChange={handleCardChange} />
							<button
								disabled={processingCard || disableCardInput || successfulCard}
							>
								<span>{processingCard ? <p>Processing</p> : 'Buy Now'}</span>
							</button>

							{userError && <div>{userError}</div>}
						</form>
					</div>
				</div>
			</div>
			<div className="payment__ContainerRight">
				<div className="payment__Details">
					<h1>Your Total</h1>
					<div className="payment__block">
						<table className="payment__Prices">
							<tr>
								<td className="payment__Prices__Topics">
									Total before tax (
									{state.cart.length > 1
										? `${state.cart.length} items`
										: `${state.cart.length} item`}
									):{' '}
								</td>
								<td className="payment__Prices__Nums">$1</td>
							</tr>
							<tr>
								<td>Shipping fees: </td>
								<td className="payment__Prices__Nums">$1</td>
							</tr>
							<tr>
								<td>Tax:</td>
								<td className="payment__Prices__Nums__Last">$1</td>
							</tr>
							<tr>
								<td>
									<h2 className="payment__Prices__Total">Order Total:</h2>{' '}
								</td>
								<td>
									<h2 className="payment__Prices__Total">$200</h2>
								</td>
							</tr>
							<tr></tr>
						</table>
					</div>
					<div className="separator"></div>
					<button className="payment__Orderbtn">Place order here</button>
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
