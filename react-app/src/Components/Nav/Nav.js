const Nav = ({items}) => {

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__item">
                    {items.map((link) => (
                        <a className="nav__link" 
                            key={link.id} 
                            href="/">
                            {link.name} 
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Nav;