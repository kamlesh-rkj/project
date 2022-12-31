import React from "react";
import  './Header.css'
import { Link } from "react-router-dom";
export default function Header(){
    return(<>
    <div className="header">
      <div className="logo">
      LEARN FROM ME
      </div>
      <div className="manu">
        <div className="inmanu"><Link to="/home" className="inmanuLink" >Home</Link></div>
        <div className="inmanu"><Link to="/home" className="inmanuLink">About</Link></div>
        <div className="inmanu"><Link to="/home" className="inmanuLink">Discotion</Link></div>
        <div className="inmanu"><Link to="/home" className="inmanuLink">Authores</Link></div>
        <div className="inmanu"><Link to="/home" className="inmanuLink">contect us</Link></div>
     
      </div>
    </div>
    
    </>)
}