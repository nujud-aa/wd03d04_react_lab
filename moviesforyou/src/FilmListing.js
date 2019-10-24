import React from 'react'

const FilmListing = (props) => {
    console.log(props);
    
    return (
       
            <div><h2>{props.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`} />            
            </div>

            
        
    )
}

export default FilmListing
