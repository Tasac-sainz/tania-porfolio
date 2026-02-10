import "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="a-footer">
                Home
            </Link>
            <p className="p-footer">kaski...keep coding</p>
        </div>
    );
};

export default Footer;
