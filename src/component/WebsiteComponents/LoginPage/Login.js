import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../img/withoutsticker.PNG';
import { Button, Form, Tabs, Tab, Nav, NavbarBrand } from 'react-bootstrap';

import { authen } from './firebase';
function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {}, [password, email]);

	const signIn = (e) => {
		e.preventDefault();
		authen
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate('/');
			})
			.catch((error) => alert(error.message));
	};

	const createAccount = (e) => {
		e.preventDefault();
		authen
			.createUserWithEmailAndPassword(email, password)
			.then((authObj) => {
				if (authObj) {
					navigate('/');
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<>
			<div className="loginPage">
				<Link to="/">
					<img className="loginPage__logo" src={img} alt="" />
				</Link>
				<div className="loginPage__container">
					<Tabs
						defaultActiveKey="signIn"
						id="uncontrolled-tab-example"
						className="mb-3 "
					>
						<Tab eventKey="signIn" title="Sign in" className="loginPage__tab">
							<Form>
								<Form.Group>
									<Form.Label>Email Address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Example@email.com"
										className="inputform"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</Form.Group>

								<Button
									className="loginPage__formBtn"
									// variant="secondary"
									type="submit"
									onClick={signIn}
								>
									Sign in
								</Button>
							</Form>
							<p>By signing-in you agree to the terms and conditions.</p>
						</Tab>
						<Tab eventKey="signUp" title="Sign up" className="loginPage__tab">
							<div className="flexbox">
								<Form>
									<Form.Group>
										<Form.Label>Email Address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Example@email.com"
											className="inputform"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
									</Form.Group>
									<Form.Group>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
									</Form.Group>
									<Form.Group>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Button
										className="loginPage__formBtn"
										// variant="secondary"
										type="submit"
										onClick={createAccount}
									>
										Create Account
									</Button>
								</Form>
							</div>
						</Tab>
						<Tab
							eventKey="forgotPass"
							title="Forgot Password"
							className="loginPage__tab"
						>
							hi
						</Tab>
					</Tabs>
				</div>

				{/* <Link to="/">
					<img className="loginPage__logo" src={img} alt="" />
				</Link>
				<div className="loginPage__container">
					<h1>Sign-in</h1>
					<form action="">
						<h5>Email</h5>
						<input type="text" />
						<h5>Password</h5>
						<input type="password" />
					</form>
					<Form>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Example@email.com" />
							<Form.Text className="text-muted">test lol</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
							<Form.Text className="text-muted">test lol</Form.Text>
						</Form.Group>
						<Button variant="secondary" type="submit">
							Login
						</Button>
					</Form>
				</div>
				<div className="loginPage__extraLinks">
					<a href="">Terms and conditions | </a>
					<a href="">Create Account | </a>
					<a href="">Forgot Password</a>
				</div> */}
			</div>
		</>
	);
}

export default Login;
