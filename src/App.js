import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
								<h1>checkout</h1>
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
