import { Link } from 'react-router-dom'
import './BotonInicio.css'

export default function BotonInicio({nombreBoton,pasaje}){
    return(
        <div className= " row navbar align-items-center contenedorboton" >

       

        <Link className="btn-inicio btn " to= {pasaje} >{nombreBoton}</Link>
        
       

        </div>
    )
        
}

