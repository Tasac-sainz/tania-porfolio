import "react";
import Header from "../components/Header";
import ListProjects from "../components/ListProjects";
import Footer from "../components/Footer";
import "../styles/app.css";

const Projects = () => {
    return (
        <>
            <Header />
            <ListProjects />
            <Footer />
        </>
    );
};

export default Projects;
