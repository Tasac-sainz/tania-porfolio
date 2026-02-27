import "react";
import FeatureIcon from "../images/feature-icon.png";
import JSIcon from "../images/js-icon.png";
import ApiIcon from "../images/api-icon.png";
import SassIcon from "../images/sass-icon.png";
import FlexIcon from "../images/flexbox-icon.png";
import GitIcon from "../images/github-icon.png";
import Node from "../images/node-icon.png";
import Postman from "../images/postman-icon.png";
import React from "../images/react-icon.png";
import CSSicon from "../images/css-icon.png";
import MySQL from "../images/mysql-icon.png";

import "../styles/listprojects.css";

const ListProjects = () => {
    const techsIcons = {
        js: JSIcon,
        api: ApiIcon,
        sass: SassIcon,
        flex: FlexIcon,
        git: GitIcon,
        react: React,
        node: Node,
        postman: Postman,
        css: CSSicon,
        mysql: MySQL,
    };

    const projects = [
        {
            nameproj: "All for You",
            description:
                "Web de ecommerce desarrollada con JavaScript puro con diseño responsive, apto para el uso de distintos dispositivos.",
            features:
                "Productos de API Rest, opción de búsqueda y reset, gestión completa de carrrito de compra (añadir, aumentar, disminuir, vaciar...), suma de importe total, almacenamiento local del cliente...",
            techs: ["js", "api", "sass", "flex", "git"],
            web: "https://tasac-sainz.github.io/tienda-online-all-for-you/",
        },
        {
            nameproj: "Recetas Four for Love",
            description:
                "Web con recetas familiares en las que los usuarios pueden registrarse, añadir nuevas recetas y consultar sus propias recetas desde cualquier lugar del mundo. Desarrollada con React y NodeJS.",
            features:
                "Registro e inicio de sesión, creacción y consulta de recetas, almacenamiento local de usuario.",
            techs: ["react", "node", "postman", "mysql", "css", "git"],
            web: "https://github.com/Tasac-sainz/recetas-four-for-love.git",
        },
        {
            nameproj: "Cool Projects",
            description:
                "Proyecto Full Stack para publicar proyectos de desarrollo web y darles visibilidad añadiendo imágenes, tecnologías, descripción y datos de autoría, desarrollada con React y NodeJS, despliegue con Render.com",
            features:
                "Publicación de proyecto, consulta de listado de proyectos, vista de detalle con enlaces a la demo del proyecto y al perfil de GitHub de su autor/a.",
            techs: ["react", "node", "postman", "mysql", "css", "git"],
            web: "https://cool-projects.onrender.com",
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
