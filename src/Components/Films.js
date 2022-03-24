import React from 'react'

export default function Films({data}) {

    return (
        <>
             <div class="card card_log">

    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={data.Poster}/>
    </div>

    <div class="card-content">

      <span class="card-title activator grey-text text-darken-4">{data.Title}<i class="material-icons right">more_vert</i></span>
      <p>{data.Type} <span>{data.Year}</span></p>

    </div>
    
  </div> 
        </>
    )
}
