import React from 'react'
import FilmRow from './FilmRow'
const FilmListing = (props) => {
    console.log(props);
    
    return (
       
    


        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
             
            {props.films.map(e => <FilmRow  
       title={e.title} poster ={e.poster_path} 
       releaseDate = {e.releaseDate}
       />)}
            </div>

            
        
    )
}

export default FilmListing
