import './style.css'

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className='limita-secao'>
                <Link to='/'><img src={process.env.PUBLIC_URL + 'assets/logo.png'} alt="logomarca gelateria" /></Link>
                <nav>
                    <Link className="link-topo" to="/" >Home</Link>
                    <Link className="link-topo" to="/Sabores" >Sabores</Link>
                    <Link className="link-topo" to="/Sobre" >Sobre</Link>
                </nav>
            </div>
        </header>
    )
}