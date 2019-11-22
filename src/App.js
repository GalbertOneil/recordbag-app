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
    constructor(props) {
        super(props)
        this.state = {
            test: ''
        }
    }

    componentDidMount() {
        this.getApi()
    }

    getApi() {
        fetch(`https://api.discogs.com/database/search?q=nirvana&artist&key=VEctSuuCuMHXlAVksAkq&secret=PtXPNMRuvbyntjqVbaCKQrOPSLoUksLP`)
            .then(res => res.json())
            .then(json => console.log(json))

    }


    render() {

        return (

            <div className = "App" >

           
            <Header />

            <Search />

           
            <Route exact path = '/'
            component = { Albumdetail }
            />

            <Route exact path = "/Main"
            component = { Main }
            /> 
            <Nav />

            <Footer />

            </div>

   
        );
    }
}

export default App;