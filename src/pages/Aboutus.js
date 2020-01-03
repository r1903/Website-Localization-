import React from "react";
import '.././App.css';
import getText from '.././components/text-resources';


const AboutUs = (props) => {
  const value = props.value;
  return (
    <main className="about">
    <h1>{getText('about',value)}</h1>
    <p>{getText('about1',value)}</p>
    <ul>
         <li>{getText('aboutli1',value)}</li>
         <li>{getText('aboutli2',value)}</li>
         <li>{getText('aboutli3',value)}</li>
         <li>{getText('aboutli4',value)}</li>	 
         <li>{getText('aboutli5',value)}</li>
     </ul>
</main>
  );
};

export default AboutUs;