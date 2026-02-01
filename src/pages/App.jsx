import "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import "../styles/app.css";

const App = () => {
    return (
        <>
            <Header />
            <Intro />
            <Icons />
            <Footer />
        </>
    );
};

export default App;
