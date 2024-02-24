
import Navegation from "../../Componentes/Navegation/Navegation" 
import "./Contact.css"
export default function Contact(){
    return(
        <div>
            <Navegation hoja="Contact"/>
            <main className="main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h1 className="row ColorBLue py-5  tituloContact">Contact</h1>
                    <p className="row colorBLue subtitle">Leave us your information so we can contact you</p>
                <form className="row colorBLue g-3 p-4" action="creo usuario en formspree y pego el link si quiero...">
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control p-4" id="message" rows="3"></textarea>
                    </div>
                    <div> 
                    <input className="btn btn-success" type="submit" value="Send"/>
                    </div>
                </form>
            </main>
        </div>
        
    )
}