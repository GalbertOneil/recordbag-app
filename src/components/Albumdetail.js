import React, { Component } from 'react';
import logo from '../images/rblogo.png';


export class Albumdetail extends Component {
  

    
  
      
  render() {

    return (
      
      <div className='detailBody'>
         <div className='description'>
          <img className='logo' src={logo} alt='logo'/>

          <div className='allText'>
            <p className='text1'>THE SEARCH ENGINE THAT</p>
            <div className='rectangle'></div>
            <p className='text2'>DISPLAYS A COMPREHENSIVE DISCOGRAPHIES</p> 
            <p className='text3'>OF YOUR FAVORITE ARTISTS AND BANDS</p> 
          </div>

            </div>   
          

      </div>

      
      

            
    
      
    )
  }
}

export default Albumdetail

