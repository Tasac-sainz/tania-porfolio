import "react";
import FeatureIcon from "../images/feature-icon.png";
import JSIcon from "../images/js-icon.png";
import ApiIcon from "../images/api-icon.png";
import SassIcon from "../images/sass-icon.png";
import FlexIcon from "../images/flexbox-icon.png";
import GitIcon from "../images/github-icon.png";
import "../styles/listprojects.css";

const ListProjects = () => {
    const techsIcons = {
        js: JSIcon,
        api: ApiIcon,
        sass: SassIcon,
        flex: FlexIcon,
        git: GitIcon,
    };

    const projects = [
        {
            nameproj: "All for You",
            description:
                "Web de ecommerce con diseño responsive, apto para el uso de distintos dispositivos.",
            features:
                "Productos de API Rest, opción de búsqueda y reset, gestión completa de carrrito de compra (añadir, aumentar, disminuir, vaciar...), suma de importe total, almacenamiento local del cliente...",
            techs: ["js", "api", "sass", "flex", "git"],
            web: "https://tasac-sainz.github.io/tienda-online-all-for-you/",
        },
        {
            nameproj: "Recetas Four for Love",
            description:
                "Servicio para que usuarios autenticados puedan crear y consultar sus propias recetas de cocina desde cualquier lugar del mundo",
        },
    ];
    return (
        <>
            <h1>CONOCE MIS PROYECTOS</h1>
            <ul className="list-container">
                {projects.map((project, i) => (
                    <li className="card" key={i}>
                        <div className="nameproj-cont">{project.nameproj}</div>
                        <div className="descrip-cont">
                            {project.description}
                        </div>
                        <div className="feature-cont">
                            <img
                                src={FeatureIcon}
                                alt="Funcionalidades"
                                className="listproject-icon"
                            />{" "}
                            {project.features}
                        </div>
                        <div className="techs-cont">
                            {project.techs &&
                                project.techs.map((tech, index) => (
                                    <img
                                        key={index}
                                        src={techsIcons[tech]}
                                        alt={tech}
                                        className="tech-icon"
                                    />
                                ))}
                        </div>
                        <div className="website-cont">
                            <a
                                href={project.web}
                                target="_blank"
                                className="project-link"
                            >
                                🌍 Ver proyecto
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListProjects;
