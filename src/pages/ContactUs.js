import React from "react";
import '.././App.css';
import getText from '.././components/text-resources';


const ContactUs = (props) => {

  const value = props.value;
  return (
<main className="contact">
    <section className="contact-items">
        <h2>{getText('contact',value)}</h2>
        <input type="text" className="contact-item" placeholder="Name..." required autoFocus/>
        <input type="tel" className="contact-item" placeholder="Phone number..." required/>
        <input type="email" className="contact-item" placeholder="Email..." required/>
        <textarea cols="30" rows="10" className="contact-item"></textarea>
        <input type="submit" value={getText('submit',value)} className="contact-item-btn"/>
    </section>
</main>
  );
};

export default ContactUs;