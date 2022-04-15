import React from 'react';
import './css/Header.css';
import img from './img/withoutsticker.PNG';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateVal } from './ContextState';
import { authen } from './firebase';
function Header() {
	const [state, dispatch] = useStateVal();
	const callAuthen = () => {
		if (state.userN) {
			authen.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img className="header__logo" src={img} alt="" />
			</Link>
			<div className="header__searchbar">
				<input type="text" className="header__searchItemInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__navBar">
				<Link to="/login">
					<div className="header__navOption" onClick={callAuthen}>
						<span className="header__navOptionOne">
							Hello {state.userN === null ? 'Guest' : state.userN.email}
						</span>
						<span className="header__navOptionTwo">
							{state.userN === null ? 'Sign in' : 'Sign out'}
						</span>
					</div>
				</Link>
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
				<Link to="/checkOut">
					<div className="header__navBasket">
						<ShoppingBasketIcon />
						<span className="header__navOptionTwo header__navBasketCount">
							{state.cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
