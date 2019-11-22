import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {


  render() {
    return (
          <div className='navigator'>
            <p className='appName' to='AlbumDetail'>RECORD BAG </p>
              <div className='navi'>
                <Link className='home' to='/'>Home</Link>
                <Link className='searchButton' to='/Main'>Search</Link>
              </div>
          </div>
    )
  }
}

export default Header
