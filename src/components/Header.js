import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utilities/constant";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from '@mui/material/IconButton';
import UserContext from "../utilities/UserContext";

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

 const {loggedInuser} = useContext(UserContext)


  return (
    <div className="bg-black p-2 flex justify-between items-center shadow-lg">
     
        <div>
        <Link to="/">
          <img className="w-40 h-20" src={logo} alt="Logo" />
        </Link>

        </div>
        <div className="flex items-center space-x-4 text-white">
          <span>Online status: {onlineStatus ? "✅" : "🔴"}</span>
          <span>
            <Link to="/" className="forced-colors:to-white hover:text-gray-400">
              <Button size="small">Home</Button>
            </Link>
          </span>
          <span>
            <Link to="/about" className="hover:text-gray-400">
              <Button size="small" color="secondary"> About Us </Button>
            </Link>
          </span>
          <span>
            <Link to="/contact" className="hover:text-gray-400">
              {" "}
              <Button size="small" color="secondary">Contact Us</Button>
            </Link>
          </span>
          <span>
            <Link to="/grocery" className="hover:text-gray-400">
              {" "}
              <Button size="small" color="secondary">Grocery</Button>
            </Link>
          </span>
          <span>
            <Link to="/cart" className="hover:text-gray-400">
              {" "}
              <Button size="small" color="secondary">Cart</Button>
            </Link>
          </span>
          <span>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                console.log(btnNameReact);
              }}
            >
              {btnNameReact === "Login" ? <LoginIcon /> : <LogoutIcon />}
            </IconButton>
          </span>
          <span className="text-white pl-3">
              {loggedInuser}
          </span>
        </div>
    </div>
  );
};

export default Header;
