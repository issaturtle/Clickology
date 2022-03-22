import React from 'react';
import './css/Header.css';
import img from './withoutsticker.PNG';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
	return (
		<div className="header">
			<img className="header__logo" src={img} alt="" />
			<div className="header__searchbar">
				<input type="text" className="header__searchItemInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__navBar">
				<div className="header__navOption">
					<span className="header__navOptionOne">hello</span>
					<span className="header__navOptionTwo">sign in</span>
				</div>
				<div className="header__navOption">
					<div className="header__navOption">
						<span className="header__navOptionOne">Return</span>
						<span className="header__navOptionTwo">sign in</span>
					</div>
				</div>
				<div className="header__navOption">
					<div className="header__navOption">
						<span className="header__navOptionOne">Your</span>
						<span className="header__navOptionTwo">Prime</span>
					</div>
				</div>
				<div className="header__navBasket">
					<ShoppingBasketIcon />
					<span className="header__navOptionTwo header__navBasketCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
