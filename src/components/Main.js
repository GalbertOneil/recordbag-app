import React, { Component } from 'react'
import logo from './NA.jpg'



export class Main extends Component {
    constructor(props){
        super(props)
          this.state = {
            data:'',
            searchTerm: ''
          }
          this.handleClick = this.handleClick.bind(this);
          
      }
      
      handleClick(){
        console.log('ok')
        if(this.state.data){
          return this.state.data.map( artist => {
            let details = artist.master_url || artist.master_url
            return(
              <div>
                <p>{details}</p>
              </div>
            )
          })
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
              
              <div className='box'>
                <p>{artista}</p>
                <p>{year}</p>
                <img onClick= {this.handleClick} 
                className='picture'
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
        {this.handleClick.master_url}
      </div>  

            
    </div>
      
    )
  }
}

export default Main
