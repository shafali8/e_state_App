import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/E-state_asserts/logo.png"
import menu from "../../assets/E-state_asserts/menu.png"
import { useState } from "react";

const Navbar = () => {

  const user = true;
  const [open, setOpen] = useState(false)
  return (
    <nav>
        <div className="left">
          <a href='/' className="logo">
            <img src={logo} alt="" />
            <span>Real eState</span>
          </a>
          <Link to="/">Home</Link>
          <Link to="/list">Property</Link>
          <Link to="/profile">Profile</Link>
          
        </div>
        <div className="right">
          { user ? 
          
           <div className="user">
              <img 
              src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" 
               />
               <span>Jonh Deo</span>
               <Link to="/profile" className="profile">
               <div className="notification">3</div>
               <span> Proile</span>
              
               </Link>
           </div>
          :(
            <>
              <Link to="/">Sign in</Link>
              <Link to="/" className="register">Registration</Link>
            </>
          )}
        
          <div className="menuIcon">
            <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)}/>
          </div>
          <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/list">Property</Link>
          <Link to="/profile">Profile</Link>
          </div>
        </div>
    </nav>
  )
};

export default Navbar;

