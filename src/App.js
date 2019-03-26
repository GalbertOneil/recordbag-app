import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        data:'',
        searchTerm: ''
      }
      
  }

  showChange(event){
    this.setState({
      searchTerm: event.target.value
    })
  }

  getApi(e){
    e.preventDefault()
    fetch(`https://api.discogs.com/database/search?q=${this.state.searchTerm}&key=VEctSuuCuMHXlAVksAkq&secret=PtXPNMRuvbyntjqVbaCKQrOPSLoUksLP`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({data: json.results})
    })
  }

  renderData() {
    if(this.state.data) {
      console.log(this.state.data)
      return this.state.data.map( artist => {
        return(
          <div className='box'>
            <p>{artist.title}</p>
            <p>{artist.year}</p>
            <img src={artist.thumb} />
          </div>  
        )
      })
    }
  }

  render() {
   
    return (
      <div className="App">
      <header>
        <h1>RECORD BAG APP</h1>
      </header>
            
        <form
          onSubmit={ e => this.getApi(e)}>

          <input
          name='search-box'
          type='text'
          placeholder='enter search term'
          value={this.state.searchTerm}
          onChange={event => this.showChange(event)}/>
          <button >Submit</button>
        </form>

        {this.renderData()}
      

      <footer>
        <h5>Record Bag est.2019</h5>
      </footer>

      </div>
    );
  }
}

export default App;
