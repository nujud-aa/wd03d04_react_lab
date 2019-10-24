//One film list and inside it many rows with map function 
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Director from './director'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

export default class App extends Component {
  render() {

  
  return (
    <div className="App">

      <div className = "film-library">

      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
       {this.props.TMDB.map(e => <FilmListing  
       title={e.title} poster ={e.poster_path} 
       releaseDate = {e.releaseDate}
       />)} 
       </div>
      <FilmDetails />
      </div>
      

    </div>
  )
}
};

// export default App;
