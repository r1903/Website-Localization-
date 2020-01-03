import React from "react";
import logo from '.././logo.jpg';
import '.././App.css';
import getText from './text-resources';


const Header =(props) => {
 
    return (
    <header className="container">
    <div className="header">
      <h1>{getText('h1',props.value)}</h1>
      <p><q>{getText('h2',props.value)}</q></p>
    </div>
    <div className="logo">
    <img src={logo} alt="logo"/>
    </div>
  </header> 
  );
   };


export default Header;