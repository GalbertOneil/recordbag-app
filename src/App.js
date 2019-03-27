import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Fav from './components/Fav'
import Search from './components/Search'



class App extends Component {
 

  render() {
   
    return (
      <div className="App">
        
        <Header />  
        <Search /> 
        <Nav />
        <Main />
        <Fav />
        <Footer /> 
      
      </div>
      
   
    );
  }
}

export default App;
