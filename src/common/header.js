import React from "react";
import "../style/main.scss"
import { Link } from "react-router-dom";


const Header = () =>{
    const headerStyle = {
        backgroundColor:"#0059b2",
        color:"#fff",
        padding: "15px 25px",
        textAlign:"left",
        display:"flex",
        justifyContent: "space-between"
    }
    return(
        <>
        <div style={headerStyle}>
            <div className="site-logo">
                <h5>Company <span style={{color:"orange"}}>Info</span></h5>
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/help">Help</Link>
                <Link to="/gallery">Gallery</Link>
        </div>
        </div>
        
        
        </>
    )
}

export default Header;