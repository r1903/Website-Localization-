import React from "react";
import footerimg from '.././pgsindia.png';
import getText from './text-resources';


const Footer = (props) => {
  return (
    <footer className="footer">
			<img  src={footerimg} alt="banner" />
			<p> <b>{getText('footer1',props.value)}</b>
			<br/>{getText('footer2',props.value)}</p>
	</footer>
  );
};

export default Footer;