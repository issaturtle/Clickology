import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from './component/Login';
import { useEffect } from 'react';
import { authen } from './component/firebase';
import { useStateVal } from './component/ContextState';

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
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
				</Routes>
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
			</div>
		</Router>
	);
}

export default App;
