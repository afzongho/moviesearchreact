import React from "react";

export default function MovieCard({movie}) {  
    return (
        <div className="card" key={movie.id}>
            <img className="card--image"
            src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p> Release Date: {movie.release_date}</p>
                <p> Release Date: {movie.vote_average}</p>
                <p className="card--desc"> {movie.overview}</p>
            </div>
        </div>
    )

}