import { useState } from 'react';

import Description from '../Description/Description';

import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
       <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
        <div>
            <img src={infoPersonaje.image}/>
            <h3 className="NombrePersonaje">{infoPersonaje.name}</h3>
            <button className="btn btn-success w-50 p-2" id='botonshowmore' onClick={showMore}>Know More..</button>
        </div>

        {
            hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
        }
       </div>
    )
    
}
