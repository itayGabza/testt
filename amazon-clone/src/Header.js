import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
    return(
        <nav className="header">
            {/* logooo */}
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            {/* search box*/}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Hello Qazi</span>
                        <span className="header_optionTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Returns</span>
                        <span className="header_optionTwo">& Orders</span>
                    </div>
                    npm install bootstrap           </Link>

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Your</span>
                        <span className="header_optionTwo">Prime</span>
                    </div>
                </Link>
                
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionTwo header_basketCount">0</span>
                    </div>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header