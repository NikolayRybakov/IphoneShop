import Logotip from "../../static/images/apple-touch-icon.png";
import "./Logo.scss";

const Logo = () => {
    return (
        <>
            <img className="logo__img" src={Logotip} alt="logo" />
            <h1 className="logo__title">IphoneShop</h1>
        </>
    )
}

export default Logo;