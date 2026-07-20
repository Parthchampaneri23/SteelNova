import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const Logo = () => {
    return (
        <Link to="/">
            <img
                src={logo}
                alt="SteelNova Industries"
                className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
        </Link>
    );
};

export default Logo;