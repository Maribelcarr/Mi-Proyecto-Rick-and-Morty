
import BotonInicio from "../../Componentes/Boton Inicio/BotonInicio";

import"./Home.css";

export default function Home(){
    return(
        <div className="principal-search container-fluid d-flex flex-column justify-content-center aling-items-center ">
        
            <div className="bg-home container-header d-flex-column justify-content-center">
                <h1 className="row justify content-center">Proyect Rick & Morty</h1>
                <h2 className="text-center p-3">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center p-2" id="subtitulo">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                </p>
                <p className="text-center p-3">Lets go!</p>
                <ul className="nav nav-pills justify-content-center">  
                <BotonInicio nombreBoton='Characters' pasaje="/characters"/>
                <BotonInicio nombreBoton="Contact" pasaje="/contact"/>    
                </ul>  
            </div>

        </div>

    )
}







