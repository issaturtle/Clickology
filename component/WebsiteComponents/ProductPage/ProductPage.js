import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import img from '../../img/withoutsticker.PNG';
import Product from './ProductDescription';
import rej from '../../img/reject.gif';

import { useStateVal } from '../PropStore/ContextState';
import AddedNotification from '../HomePage/AddedNotification.js';

/**
 *
 * @returns The Project Page for the website
 */
function ProductPage(){
    
    const [notifList, setList] = useState([]);

	const addToNotificationList = (name) => {
		setList((oldArray) => {
			return [...oldArray, name];
		});
	};
	const removeNotif = (name) => {
		let newList = [...notifList];

		const index = notifList.findIndex((cartItem) => cartItem === name);

		if (index >= 0) {
			newList.splice(index, 1);
		}

		setList(newList);
	};

	return (
		<>
			<div className="notifContainer">
				{notifList.map((item) => (
					<AddedNotification
						name={item}
						removeNotif={removeNotif}
						setList={setList}
						messages={notifList}
						delay={3000}
					/>
				))}
            </div>
                <img src={img} alt="" className="home__contentImage" />
                <div className="home__contentRow">
                    <Product
                        id="1"
                        rating={5}
                        price={11.69}
                        title="NFT"
                        desc="Sample Item Decription"
                        image={rej}
                        addedToCartNotif={addToNotificationList}
                    />
                </div>
        </>
       
    );

}

export default ProductPage;