import "react";

const Header = () => {
    return (
        <>
            <nav>
                <a href="#about">Sobre mí</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
            <div className="hero">
                <h1 className="title">Tania S. Sainz de Aja</h1>
                <h2 className="subtitle">Developer Full Stack</h2>
                <p className="quote">Construyendo el futuro en cada sprint</p>
            </div>
        </>
    );
};

export default Header;
