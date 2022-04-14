import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from './component/Login';
function App() {
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
