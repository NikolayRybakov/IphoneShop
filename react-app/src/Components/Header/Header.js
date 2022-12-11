import logo from "./../../static/images/apple-touch-icon.png";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="logo" href={logo} id="logo">
                        <img className="logo__img" src={logo} alt="logo" />
                    </a>
                    <h1 className="logo__title">IphoneShop</h1>
                    <svg className="header__heart" width="43" height="35" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" fill="#888888" />
                    </svg>
                    <span className="header__heart-number">12</span>
                    <svg className="header__basket" width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.720947 0.915039H8.01813H9.72605L10.061 2.5228L11.0138 7.09618H39.3531H41.8122L41.4081 9.42498L39.2618 21.7872L38.9716 23.4584H37.2068H14.4226L15.3062 27.7H37.2068V31.7H13.5983H11.8904L11.5554 30.0922L7.26297 9.4884L9.30586 9.09618L7.26297 9.4884L6.3102 4.91504H0.720947V0.915039ZM11.8471 11.0962L13.5893 19.4584H35.442L36.8937 11.0962H11.8471ZM19.2129 36.6778C19.2129 38.5186 17.6624 40.007 15.7449 40.007C13.8273 40.007 12.2769 38.5186 12.2769 36.6778C12.2769 34.837 13.8273 33.3876 15.7449 33.3876C17.6624 33.3876 19.2129 34.837 19.2129 36.6778ZM32.9162 40.007C34.8337 40.007 36.3841 38.5186 36.3841 36.6778C36.3841 34.837 34.8337 33.3876 32.9162 33.3876C30.9985 33.3876 29.4481 34.837 29.4481 36.6778C29.4481 38.5186 30.9985 40.007 32.9162 40.007Z" fill="#888888" />
                    </svg>
                    <span className="header__basket-number">3</span>
                </div>
            </div>
        </div>
    )
}

export default Header;