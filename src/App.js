import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Product from './pages/Products';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      language: JSON.parse(localStorage.getItem('language')) || 'English'
    };
  }

  handleChange =(e) => {
    this.setState({language:e.target.value});
    localStorage.setItem('language', JSON.stringify(e.target.value));
  }

render() {
  return (
  <BrowserRouter>
    <div>
      <Header value={this.state.language} /> 
      <Navbar  value={this.state.language} handleChange={this.handleChange}/>
        <Route exact path='/' 
              render = {(routeProps) => (<Home {...routeProps} value={this.state.language}/>)} />
        <Route path='/aboutus' 
              render = {(routeProps) => (<AboutUs {...routeProps} value={this.state.language}/>)} />
        <Route path='/contact' 
              render = {(routeProps) => (<ContactUs {...routeProps} value={this.state.language}/>)} />
        <Route path='/products'
                render = {(routeProps) => (<Product {...routeProps} value={this.state.language}/>)}/>
      <Footer value={this.state.language}/>
    </div>
  </BrowserRouter> 
  );
}
}
export default App;
