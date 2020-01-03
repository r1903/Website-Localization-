import React from "react";
import '.././App.css';
import getText from './text-resources';
import {Link } from 'react-router-dom';

const Subnav = (props) => {
	const value = props.value
  return (
    		<ul className="subnav">
					<li><Link to="/products/#foxtail">{getText('submenu1',value)}</Link></li>
					<li><Link to="/products/#barnyard">{getText('submenu2',value)}</Link></li>
					<li><Link to="/products/#little">{getText('submenu3',value)}</Link></li>
					<li><Link to="/products/#kodo">{getText('submenu4',value)}</Link></li>
					<li><Link to="/products/#proso">{getText('submenu5',value)}</Link></li>
					<li><Link to="/products/#sorgum">{getText('submenu6',value)}</Link></li>
					<li><Link to="/products/#browntop">{getText('submenu7',value)}</Link></li>
			</ul>
  );
};

export default Subnav;