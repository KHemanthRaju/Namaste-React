import { useState } from "react";
import useOnline from "../utils/useOnline";
//import { Link } from "react-router-dom";
const Link = require("react-router-dom").Link;

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {/* JSX Expressions are allowed not statements */}
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
