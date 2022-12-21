import logo from "./../../static/images/apple-touch-icon.png";

const Logo = () => {
    return (
        <div className="logo">
            <a className="logo__link" href="/" id="logo">
                <img className="logo__img" src={logo} alt="logo" />
            </a>
            <h1 className="logo__title">IphoneShop</h1>
        </div>
    )
}

export default Logo;