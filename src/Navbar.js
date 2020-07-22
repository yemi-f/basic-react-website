import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const show = isOpen ? "show" : "";

    return (
        <div style={{ marginBottom: "56px" }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white" >
                <NavLink to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>myHealth</NavLink>

                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show} >
                    <div className="navbar-nav">
                        <NavLink to="/about" className="nav-item nav-link" activeStyle={{ color: "black" }} onClick={toggleMenu}>About</NavLink>
                        <NavLink to="/register" className="nav-item nav-link" activeStyle={{ color: "black" }} onClick={toggleMenu}>Register</NavLink>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;