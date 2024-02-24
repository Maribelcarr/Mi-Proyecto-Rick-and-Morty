import { Link } from 'react-router-dom';
import './Navegation.css';

export default function Navegation({hoja}){

    return(
        <div className='ContenedorNav'>
          <nav className="navbar navbar-expand-lg w-100 bg-blue">
                
             <div className="container-fluid">
                 <Link to="/">
                 <h1 className="navbar-brand cursor-p" >Rick & Morty</h1>
                 </Link>  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                     <ul className="navbar-nav nav-pills p-4">
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" >
                          <Link className="nav-link btn-active p-2"   to="/characters">Characters       
                        </Link>
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link"} >
                        <Link className="nav-link btn-active p-2"  to="/contact">Contact </Link>

                        </li>
                    
                      </ul>
                </div>
              </div>
            </nav>
        </div>
        


    )
}