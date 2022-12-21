import color1 from './../../static/images/color-1.webp';
import color2 from './../../static/images/color-2.webp';
import color3 from './../../static/images/color-3.webp';
import color4 from './../../static/images/color-4.webp';
import color5 from './../../static/images/color-5.webp';
import color6 from './../../static/images/color-6.webp';

const Color = () => {
    return (
        <div className="color characteristics__color">
            <h3 className="subtitle subtitle_margin-bottom">Цвет товара: синий</h3>
            <div className="color__group">
                <button className="color__button">
                    <img className="color__img-button" src={color1} alt="characteristic-color__img-button" />
                </button>
                <button className="color__button">
                    <img className="color__img-button" src={color2} alt="characteristic-color__img-button" />
                </button>
                <button className="color__button">
                    <img className="color__img-button" src={color3} alt="characteristic-color__img-button" />
                </button>
                <button className="color__button">
                    <img className="color__img-button" src={color4} alt="characteristic-color__img-button" />
                </button>
                <button className="color__button">
                    <img className="color__img-button" src={color5} alt="characteristic-color__img-button" />
                </button>
                <button className="color__button">
                    <img className="color__img-button" src={color6} alt="characteristic-color__img-button" />
                </button>
            </div>
        </div>
    )
}

export default Color;