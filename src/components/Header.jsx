import "react";
import { Link } from "react-router-dom";
import Fenix from "../images/fenix_redondo_blanco.png";

const Header = () => {
    return (
        <>
            <nav className="div_nav">
                <Link to="/" className="header_nav">
                    Inicio
                </Link>
                <Link to="/about" className="header_nav">
                    Sobre mí
                </Link>
                <Link to="/projects" className="header_nav">
                    Proyectos
                </Link>
                <Link to="/contact" className="header_nav">
                    Contacto
                </Link>
                <img src={Fenix} alt="logo fenix" className="fenix" />
            </nav>
            <h1 className="web-title">Fenix Web Solutions</h1>
            <h2 className="web-subtitle">Tu página web, sin complicaciones</h2>
        </>
    );
};
export default Header;
