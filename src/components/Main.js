import React, { Component } from 'react'

export class Main extends Component {
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
          this.setState({data: json.results})
        })
      }
    
      renderData() {
        if(this.state.data) {
          return this.state.data.map( artist => {
            return(
              <div className='box'>
                <p>{artist.title}</p>
                <p>{artist.year}</p>
                <img src={artist.thumb} alt='covers' />
              </div>  
            )
          })
        }
      }
  render() {

    return (
      <div>
                 
        <form
          onSubmit={ e => this.getApi(e)}>

          <input className='search'
          name='search-box'
          type='text'
          placeholder='enter search term'
          value={this.state.searchTerm}
          onChange={event => this.showChange(event)}/>
          <button >Submit</button>
        </form>

      <div className='info'>
        {this.renderData()}
      </div>  
              
      </div>
    )
  }
}

export default Main
