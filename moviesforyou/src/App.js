//One film list and inside it many rows with map function 
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Director from './director'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

class App extends Component {





  render() {

  // console.log(this.props)
  return (
    <div className="App">

      <div className = "film-library">

      {/* <div className="film-list">
      <h1 className="section-title">FILMS</h1>
       {this.props.TMDB.map(e => <FilmListing  
       title={e.title} poster ={e.poster_path} 
       releaseDate = {e.releaseDate}
       />)} 
       </div> */}
       <FilmListing films={this.props.TMDB}/>
      <FilmDetails />
      </div>
      

    </div>
  )
}
};

export default App;
