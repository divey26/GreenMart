import './Navbar.css';
import { useState } from 'react';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import basket_icon from '../assets/basket_icon.png';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt="" id="logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("products")}><Link to='/product'>Products</Link>{menu === "products" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("aboutUs")}><Link to='/aboutUs'>About Us</Link>{menu === "aboutUs" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("service")}><Link to='/complaint'>Customer Service</Link>{menu === "service" ? <hr /> : <></>}</li>
            </ul>
            <div className="navbar-right">
                <img src={search} alt="Search" className="search" />
                <div className="navbar-search-icon">
                    {/* Redirect to Cart Page */}
                    <Link to='/cart'>
                        <img src={basket_icon} alt="Cart" className="basket" />
                    </Link>
                    {/* Show cart count */}
                    <div className="nav-cart-count">{cartCount}</div>
                    <div className="dot">
                        <Link to='/signup'><button>Sign in</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
