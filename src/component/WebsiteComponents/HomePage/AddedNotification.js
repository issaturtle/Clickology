import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../css/CartProduct.css';
/**
 * notification function that displayed on screen if clicked added to cart
 * @param {*} param0
 * @returns a notification that shows which item was added in cart
 */
function AddedNotification({
	//props: name = productName, removeNotif = func(), messsages = msg list, setList = func()
	name,
	removeNotif,
	messages = [],
	delay = 1000,
	setList,
}) {
	const msg = [...messages];
	//if clicked (x) in notification, remove msg from the array
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
