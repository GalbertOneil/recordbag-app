import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Albumdetail from './components/Albumdetail'
import Search from './components/Search'



class App extends Component {
 

  render() {
   
    return (
      
       <div className="App">

       <div className='navi'>
        <Link to='/Albumdetail'>About Page</Link>
        <Link to='/Main'>Main</Link>
      </div> 

        <Header />  

        <Search /> 

        <Route
          path='/Albumdetail'
          component={Albumdetail}
        />

        <Route 
        exact path="/Main" 
        component={Main} />
        <Nav />
        
        <Footer /> 
      
      </div>
      
   
    );
  }
}

export default App;
