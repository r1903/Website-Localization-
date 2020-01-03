import React from "react";
import '.././App.css';
import Subnav from './Subnav';
import {Link } from 'react-router-dom';
import getText from './text-resources';



const Navbar = (props) => {
  return (
    <nav className="nav">
   		 <ul>
	   		<li><Link to="/">{getText('menuItem1',props.value)}</Link></li>
			<li><Link to="/aboutus">{getText('menuItem2',props.value)}</Link></li>
			<li><Link to="/products">{getText('menuItem3',props.value)}<span className="arrow">&#x25BC;</span></Link>
				<Subnav value={props.value} />
			</li>
			<li><Link to="/contact">{getText('menuItem4',props.value)}</Link></li>	
			<li><select  value={props.value} onChange={props.handleChange}>
					<option value="English">{getText('menuItem51',props.value)}</option>
					<option value="Kannada">{getText('menuItem52',props.value)}</option>
				</select></li>
		</ul>
    </nav>
  );
};

export default Navbar;