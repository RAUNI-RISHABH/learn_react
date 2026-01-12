import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utilities/constant";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { Button, Badge } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from '@mui/material/IconButton';
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered!");

  const onlineStatus = useOnlineStatus();

  // if no dependecy array is given then useEffect is called on every render
  // if there is empty dependecy array then useEffect is called on initial render(just once)
  // if dependecy array is given as "btnNameReact" then it is being called everytime when btnNameReact is updated
  useEffect(() => {
    console.log("Header rendered! from useEffect");
  }, []);

 const {loggedInuser} = useContext(UserContext);


 //selector: subscribing to the store using selector hooks given by react-redux

 const  cartItems = useSelector((store) => store.cart.items);


  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="w-40 h-20" src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-white">
          <span className="flex items-center space-x-2">
            <span className="text-sm">Status:</span>
            <span className="text-lg">{onlineStatus ? "✅ Online" : "🔴 Offline"}</span>
          </span>
          <Link to="/" className="hover:text-gray-300">
            <Button size="small" variant="text" color="inherit">Home</Button>
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            <Button size="small" variant="text" color="secondary">About Us</Button>
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            <Button size="small" variant="text" color="secondary">Contact Us</Button>
          </Link>
          <Link to="/grocery" className="hover:text-gray-300">
            <Button size="small" variant="text" color="secondary">Grocery</Button>
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            <Badge badgeContent={cartItems.length} color="primary">
              <Button size="small" variant="text" color="primary">Cart</Button>
            </Badge>
          </Link>
          <IconButton
            color="primary"
            aria-label="toggle login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact === "Login" ? <LoginIcon /> : <LogoutIcon />}
          </IconButton>
          <span className="text-white pl-3 font-medium">
            {loggedInuser}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
