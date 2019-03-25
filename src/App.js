import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        test:''
      }
  }

  componentDidMount(){
    this.getApi()
  }

  getApi(){
    fetch(`https://api.discogs.com/database/search?q=nirvana&artist&key=VEctSuuCuMHXlAVksAkq&secret=PtXPNMRuvbyntjqVbaCKQrOPSLoUksLP`)
    .then(res => res.json())
    .then(json => console.log(json)
    )
    
  }


  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
