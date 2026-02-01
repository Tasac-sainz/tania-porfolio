import "react";
import About from "../images/about-me.png";
import Projects from "../images/project-management.png";
import Contact from "../images/contact-me.png";

const Icons = () => {
    return (
        <>
            <div className="icons-contain">
                <div className="about-contain">
                    <a href="">
                        <img
                            src={About}
                            alt="about-me"
                            className="icons-menu"
                        />
                        <p>Sobre mí</p>
                    </a>
                </div>
                <div className="projects-contain">
                    <a href="">
                        <img
                            src={Projects}
                            alt="go to projects"
                            className="icons-menu"
                        />
                        <p>Ver proyectos</p>
                    </a>
                </div>
                <div className="contact-contain">
                    <a href="">
                        <img
                            src={Contact}
                            alt="contact"
                            className="icons-menu"
                        />
                        <p>Contacto</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Icons;
