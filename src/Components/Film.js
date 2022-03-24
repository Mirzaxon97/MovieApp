import React from "react";
import Films from './Films';


export default function Film({movie}){
    return(
        <>
        <div className="films">
            {movie.map(data => < Films data={data} key={data.imdbID}/>)}
        </div>
        </>
    )
}