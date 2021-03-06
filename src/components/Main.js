import React, { Component } from 'react'
import logo from './NA.jpg'


export class Main extends Component {
    constructor(props){
        super(props)
          this.state = {
            data:'',
            searchTerm: '',
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
              let year = artist.year || 'Unknown'
              let artista = artist.title || artist.title
              let photo = artist.thumb || logo
              
              return(
              
              <div className='box' key={artist.id}>
                <div className='artistInfo'>
                <div className='square-artistInfo'></div>
                  <p className='artist' maxlenght='10'>{artista}</p>
                  <p className='year'>{year}</p>
                </div>
                  <img className='picture'
                  src={photo} alt='pic' />
                    
              </div>  
            )
            
          })
                   
        }
        
      }
  render() {
    
    return (
      <div className='big-Box'>
                 
        <form className='search'
          onSubmit={ e => this.getApi(e)} path='_blank'>

            <input className='placeholder'
            name='search-box'
            type='text'
            placeholder='Type any arstist here'
            value={this.state.searchTerm}
            onChange={event => this.showChange(event)}/>
            <button className='submit'>SEARCH</button>
        </form>

      <div className='info'>
        {this.renderData()}
      </div>  
             
    </div>
      
    )
  }
}

export default Main
