import { useState } from "react";
import { LOGO_URL } from "../utilities/constant";


export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login")
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="button" onClick={() => {
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
              console.log(btnNameReact);
              
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;