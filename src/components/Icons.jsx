import "react";
import { Link } from "react-router-dom";
import About from "../images/about-me.png";
import Projects from "../images/project-management.png";
import Contact from "../images/contact-me.png";

const Icons = () => {
    return (
        <>
            <div className="icons-contain">
                <div className="about-contain">
                    <Link to="/about">
                        <img
                            src={About}
                            alt="about-me"
                            className="icons-menu"
                        />
                        <p>Sobre mí</p>
                    </Link>
                </div>
                <div className="projects-contain">
                    <Link to="/projects">
                        <img
                            src={Projects}
                            alt="go to projects"
                            className="icons-menu"
                        />
                        <p>Ver proyectos</p>
                    </Link>
                </div>
                <div className="contact-contain">
                    <Link to="/contact">
                        <img
                            src={Contact}
                            alt="contact"
                            className="icons-menu"
                        />
                        <p>Contacto</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Icons;
