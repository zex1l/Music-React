import "../styles/style.css"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="logo">Music</div>
                    <nav className="nav__link">
                        <div className="link__search">
                            Serach musics
                        </div>
                        <a className="link__gitHub" href="https://github.com/zex1l">Git Hub</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;