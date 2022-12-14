import { useState } from "react";

const Price = () => {

    const [heart, setHeart] = useState(false);

    return (
        <div className="price">
            <span className="price__discount">75 990₽</span>
            <span className="price__discount-info">-8%</span>
            <svg className={`price__heart-link ${heart ? "price__heart-link_active" : ""}`} onClick={() => setHeart(!heart)}  width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" fill="#888888" />
            </svg>
            <h3 className="price__subtitle">67 990₽</h3>
            <div className="price__delivery">
                <p className="price__text">Самовывоз в четверг, 1 сентября — <span>бесплатно</span></p>
                <p className="price__text">Курьером в четверг, 1 сентября — <span>бесплатно</span></p>
            </div>
            <div className="price__button">Добавить в корзину</div>
        </div>
    )
}

export default Price;