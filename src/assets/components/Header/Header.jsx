import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="my-4">
            <h2 className="text-3xl my-2">Navbar</h2>
            <nav>
                <NavLink className="mr-6 font-semibold" to="/">
                    Home
                </NavLink>
                <NavLink className="mr-6 font-semibold" to="/about">
                    About
                </NavLink>
                <NavLink className="mr-6 font-semibold" to="/contact">
                    Contact Us
                </NavLink>
                <NavLink className="mr-6 font-semibold" to="/users">
                    User
                </NavLink>
                <NavLink className="mr-6 font-semibold" to="/posts">
                    Posts
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
