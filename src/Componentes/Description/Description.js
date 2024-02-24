
import "./Description.css"

export default function Description({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div className="d-flex p-5 flex-column align-items-center more-info-section">
        <button className="btn btn-sucess" onClick={ocultar}>X</button>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Character Status: {status}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Species</span>{especie}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Origin</span>{origen}</li>
                <li className="list-group-item fw-bold "><span className="fw-normal">Gender</span>{genero}</li>
        </ul>        
        </div>

    )
}
