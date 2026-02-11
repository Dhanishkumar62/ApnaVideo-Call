import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {

  const router = useNavigate();
  const [open,setOpen] = useState(false);

  return (
    <div className="landingPageContainer">

      <nav>
        <h2>Apna Video Call</h2>

        
        <div className="mobileMenu" onClick={()=>setOpen(!open)}>⋮</div>

        <div className={`navlist ${open ? "open":""}`}>
          <p onClick={()=>router(`/${Math.random().toString(36).substring(2,8)}`)}> Join as Guest</p>

          <p onClick={()=>router("/auth")}>Register</p>
          <p onClick={()=>router("/auth")}>Login</p>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
          <p>Cover a distance by Apna Video Call</p>

          <div role="button">
            <Link to="/auth">Get Started</Link>
          </div>
        </div>

        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>

    </div>
  );
}
