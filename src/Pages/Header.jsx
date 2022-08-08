import { Link } from "react-router-dom";

import "../styles/style.css"
const linkStyle = {
    textDecoration: 'none',
    color: "#fff",
}

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <Link to={"/"} style={linkStyle} className="logo">Music</Link>
                    <nav className="nav__link">
                        <Link to={"/search"} className="link__search" style={linkStyle}>
                            Serach musics
                        </Link>
                        <a className="link__gitHub" href="https://github.com/zex1l">Git Hub</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;