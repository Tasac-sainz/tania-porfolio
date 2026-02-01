import "react";
import Fenix from "../images/fenix_redondo_blanco.png";

const Header = () => {
    return (
        <>
            <nav className="div_nav">
                <a className="header_nav" href="">
                    Sobre mí
                </a>
                <a className="header_nav" href="">
                    Proyectos
                </a>
                <a className="header_nav" href="">
                    Contacto
                </a>
                <img src={Fenix} alt="logo fenix" className="fenix" />
            </nav>
            <h1 className="web-title">Fenix Web Solutions</h1>
            <h2 className="web-subtitle">Tu página web, sin complicaciones</h2>
        </>
    );
};
export default Header;
