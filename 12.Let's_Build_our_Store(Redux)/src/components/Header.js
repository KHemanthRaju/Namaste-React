import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
import userContext from "../utils/UserContext";
//import { Link } from "react-router-dom";
const Link = require("react-router-dom").Link;

const Title = () => {
  return (
    <img
      className="h-28 p-4"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/" className="px-5">
            <li>Home</li>
          </Link>

          <Link to="/about" className="px-5">
            <li>About</li>
          </Link>

          <Link to="/contact" className="px-5">
            <li>Contact</li>
          </Link>

          <Link to="/instamart" className="px-5">
            <li>Instamart</li>
          </Link>
          <Link to="/cart" className="px-5">
            <li>Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      {/* JSX Expressions are allowed not statements */}
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-red-700">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
