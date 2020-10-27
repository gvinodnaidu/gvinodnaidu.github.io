import React, {useState} from 'react';
import {Link} from  'react-router-dom';
import "./Navbar.css";

function Navbar() {
    
     const[click, setClick]= useState(false);
     const handleClick= ()=> setClick(!click);
     const closeMobileMenu =() => setClick(false);
     const showButton =()=>{
      
     };
     window.addEventListener("resize", showButton);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Maxeon
                    </Link>
                    <div className=" menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' :'fas fa-bars'}/>
                    </div>
                    <ul className={click ? "nav-menu active" :"nav-menu"}>
                        <li className="nav-items">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Products
                            </Link>

                        </li>
                        <li className="nav-items">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Features
                            </Link>
                            
                        </li>
                        <li className="nav-items">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Use Cases
                            </Link>
                            
                        </li>
                        <li className="nav-items">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Pricing
                            </Link>
                            
                        </li>
                       
                        <li className="nav-items">
                            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Login
                            </Link>
                            
                        </li>

                    </ul>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar
