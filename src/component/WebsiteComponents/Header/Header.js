import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LoginIcon from "@mui/icons-material/Login";
import { useStateVal } from "../PropStore/ContextState";
import { authen } from "../LoginPage/firebase";

import "../../css/Header.css";
import img from "../../img/withoutsticker.PNG";
import { calculate_cart_length } from "../PropStore/Reducer";
/**
 *
 * @returns The navBar of the website
 */
function Header() {
  const [state, dispatch] = useStateVal();
  const [search_bar, set_search_bar] = useState("");

  useEffect(() => {
    console.log(search_bar);
  }, [search_bar]);
  /**
   * update user status using firebase
   */
  const callAuthen = () => {
    if (state.userN) {
      authen.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={img} alt="" />
        </Link>
        <div className="header__searchbar">
          <input
            type="text"
            className="header__searchItemInput"
            onChange={(e) => {
              set_search_bar(e.target.value);
            }}
          />
          <Link to={{ pathname: "/searchPage/" + search_bar, state: state }}>
            <SearchIcon className="header__searchIcon" />
          </Link>
        </div>
        <Link to="/login">
          <div className="header__navOption" onClick={callAuthen}>
            <span className="header__navOptionOne test">
              Hello {state.userN === null ? "Guest" : state.userN.email}
            </span>
            <span className="header__navOptionTwo">
              {state.userN === null ? "Sign in" : "Sign out"}
            </span>
          </div>
        </Link>
        <div className="header__navBar">
          <Link to="/order">
            <div className="header__navOption">
              <div className="header__navOption">
                <span className="header__navOptionOne">Order</span>
                <span className="header__navOptionTwo">History </span>
              </div>
            </div>
          </Link>
          {/* <div className="header__navOption">
					<div className="header__navOption">
						<span className="header__navOptionOne">Your</span>
						<span className="header__navOptionTwo">Prime</span>
					</div>
				</div> */}
          <Link to="/checkout">
            <div className="header__navBasket">
              <ShoppingBasketIcon />
              <span className="header__navOptionTwo header__navBasketCount">
                {calculate_cart_length(state.cart)}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div class="header__menu">
        <a href="order">Order History</a>
        <a href="login">Login</a>
        <Link to="/checkout">
          <a href="">Cart</a>
        </Link>
      </div>
    </>
  );
}

export default Header;
