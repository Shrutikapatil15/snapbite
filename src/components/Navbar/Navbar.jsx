import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const store = useContext(StoreContext);
  const getTotalCartAmount = store?.getTotalCartAmount || (() => 0);

  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={assets.FoodVilleLogo}
          alt="logo"
          className="logo"
          onClick={() => setMenu("home")}
        />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/Menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </Link>
        {menu !== "Menu" && (
          <>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact us
            </a>
          </>
        )}
      </ul>

      <div className="navbar-right">
        <Link to="/Menu" className="MenuIcon">
          <img src={assets.Menu_icon} onClick={() => setMenu("Menu")} />
        </Link>
        <div className="navbar-cart-icon">
          <Link to="/Cart">
            <img src={assets.cart_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            if (user) {
              auth.signOut();
            } else {
              setShowLogin(true);
            }
          }}
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
