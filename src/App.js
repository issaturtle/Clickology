import './App.css';
import Header from './component/WebsiteComponents/Header/Header';
import Home from './component/WebsiteComponents/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Checkout from './component/WebsiteComponents/CheckoutPage/Checkout';
import Login from './component/WebsiteComponents/LoginPage/Login';
import { useEffect } from 'react';
import { authen } from './component/WebsiteComponents/LoginPage/firebase';
import { useStateVal } from './component/WebsiteComponents/PropStore/ContextState';
import Payment from './component/WebsiteComponents/PaymentPage/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripeClient = loadStripe(
	'pk_test_51KquBTJ0wGZ0mBp51JdztrUS50BXLMqIyOIyw3RAMVgjMnzSLLe4lqgvZqt7SP2vIaZaUZufqrup5grkKksgHg2d00KNhxo7OL'
);
function App() {
	const [{ userN }, dispatch] = useStateVal();
	useEffect(() => {
		authen.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'SET_STATE_USER',
					userN: authUser,
				});
			} else {
				dispatch({
					type: 'SET_STATE_USER',
					userN: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route
						exact
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
				</Routes>
				<Routes>
					<Route
						exact
						path="/login"
						element={
							<>
								<Login />
							</>
						}
					/>
				</Routes>
				<Routes>
					<Route
						exact
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={stripeClient}>
									<Payment />
								</Elements>
							</>
						}
					/>
				</Routes>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
