import React from "react";
import '.././App.css';
import banner from '.././banner.jpg';
import banner1 from '.././banner1.jpg';
import capture from '.././capture.jpg';
import getText from '.././components/text-resources';

class Main extends React.Component{
	constructor(props){
	  super(props);
	  this.state={
		index:0
	  }
	}

 changeImg=()=>{
		let i = this.state.index;
		  if(i < 2){
		   i++;
		  } else {
			i = 0;
			}
		this.setState({index:i})
		}

	startLoop= ()=> {
	 setInterval(this.changeImg, 3000);
	}
	componentDidMount(){
      this.startLoop();
	}
  
	render() {
		const images=[banner,banner1,capture];
		console.log(this.props.value);
	
	  return (
	  <main className="main-content">
		  <div className="main">
				<q>{getText('quote1',this.props.value)}</q>
			  <p><strong>{getText('quote1A',this.props.value)}</strong></p>
		  </div>
		  <div className="main1">
			  <img src={images[this.state.index]} alt="banner" height={`400px`} width={`600px`} />
		  </div>
		  <div className="main2">
			  <q>{getText('quote2',this.props.value)}</q>
			  <p><strong>{getText('quote2A',this.props.value)}</strong></p> 
		   </div>
		  
	  </main> 
	);
  
	 }
  };
  
  export default Main;