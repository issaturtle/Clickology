import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/CartProduct.css';

function AddedNotification({
	name,
	removeNotif,
	messages = [],
	delay = 1000,
	setList,
}) {
	const msg = [...messages];
	useEffect(() => {
		const timer = setTimeout(() => {
			if (msg.length) {
				// document.getElementById('temp').classList.add('myelement');

				msg.shift();
				setList(msg);
			}
		}, delay);
		return () => clearTimeout(timer);
	}, [messages]);
	return (
		<div className="notif" id="temp">
			<div className="notif__name">
				<strong>{name}</strong> was added to cart
			</div>
			<button
				className="notif__btn"
				onClick={() => {
					const promise = new Promise(() => {
						document.getElementById('temp').classList.add('myelement');
					}).then(() => {
						return removeNotif(name);
					});
				}}
			>
				x
			</button>
		</div>
	);
}

export default AddedNotification;
