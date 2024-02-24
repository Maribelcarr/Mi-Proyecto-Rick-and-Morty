import { Fragment } from "react";
import "./Filters.css"
import Filter from "../Filter/Filter";

export default function Filters({filterCharacter}) {

    return(
        <Fragment className="contenedorTituloFilters ">
         
        
            <p className="TituloFilters">Filters</p>
           

         <form className="ListFilters"> 
            <Filter  filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
            <Filter   filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
            <Filter  filterName="Female" title="Female" filterCharacter={filterCharacter}/>
            <Filter  filterName="Male" title="Male" filterCharacter={filterCharacter}/>
            <Filter  filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
         </form>
         
        </Fragment>
       
    )
}