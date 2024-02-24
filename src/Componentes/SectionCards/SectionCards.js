 
import {useState,useEffect} from 'react';

import Card from "../Card/Card";
import Filters from '../Filters/Filters';

import "./SectionCards.css"

export default function SectionCards(){
    
    let [listaPersonajes,setListaPersonajes]=useState([]);
    let [personajesCompleto,setPersonajesCompleto]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);
    
    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character") 
        
               .then((resp)=>{return resp.json()}) 
               .then((data)=>{ return data.results})
                    
               .catch((error)=>{console.log(error)}) 
       
           
          console.log(info)
        
        setListaPersonajes(info)  
        setPersonajesCompleto(info)
    };

    const filterCharacter=(target)=>{
        
        if(target.checked === true){
            
            setFiltrosAplicados([...filtrosAplicados,target.value])
           
        }else{
          
            setListaPersonajes(personajesCompleto)
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);//saco el filtro aplicado de la lista
            setFiltrosAplicados(filtrosNuevos)
            
        }
    }

    useEffect(()=>{
        setListaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
        
        filtrosAplicados.forEach((data)=>   {
            if(data === "Dead" || data ==="Alive"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data); 
                setListaPersonajes(dataFiltrada)
            }else if(data === "Female" || data ==="Male"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
                setListaPersonajes(dataFiltrada)
            }else if(data === "Unknown"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            }
        })

    
    },[filtrosAplicados])
    
    useEffect(()=>{
        traerPersonajes()
    },[]);
   
    return(
        <section className="row cards-section fuenteBlanca">


            <Filters filterCharacter={filterCharacter}/>
         
            {
                listaPersonajes.map((personaje)=>{
                    
                    return <Card key={personaje.id} infoPersonaje={personaje}/>
                })
            }
            
        </section>
    )
};




