import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './component/Checkout';
function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
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
								<Checkout />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
