import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        test:[],
      }
  }

  componentDidMount(){
    this.getApi()
  }

  getApi(){
    fetch(`https://api.discogs.com/database/search?q=nirvana&artist&key=VEctSuuCuMHXlAVksAkq&secret=PtXPNMRuvbyntjqVbaCKQrOPSLoUksLP`)
    .then(res => res.json())
    .then(json => {
      this.setState({test: json.results})
    }    )
    
  }
  render() {
    let getArtist = this.state.test.map( artist => {
      return(
        <div>
          <p>{artist.title}</p>
          <p>{artist.year}</p>
        </div>  
      )
    })
    return (
      <div className="App">
        {getArtist}
      </div>
    );
  }
}

export default App;
