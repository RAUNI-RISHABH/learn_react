import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilities/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

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

  return (
    <div className="header">
      <Link to="/">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      </Link>

      <div className="nav-items">
        <ul>
          <li>
            Online status: {onlineStatus ? "✅" : "🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact Us</Link></li>
          <li> <Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            className="button"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
