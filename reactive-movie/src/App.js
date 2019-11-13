import React, {Component} from "react"
import './App.css'
import Films from './Films'
import Details from './Details'
import TMDB from './TMDB.js'
import axios from "axios"

export default class App extends Component {
  constructor(props){
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state={
    films: TMDB.films,
    faves: [],
    current: {}
  }
  handleFaveToggle = (film) => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film)
    filmIndex === -1? faves.push(film): faves.splice(filmIndex, 1) 
    this.setState({faves})
    console.log(faves)
  }
  handleDetailsClick = (film) => {
    console.log("row details "+ film.title)
    this.setState({current: film})
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })
  }
  
  render() {

    return (
    <div className="App">
      <div className="film-library">
        <Films films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/> 
        <Details film={this.state.current}/>
      </div>
    </div>

    );
  }
}