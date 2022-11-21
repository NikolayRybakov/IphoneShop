import "./Review.scss";
import starGold1 from "../../static/images/star-gold.svg";
import starGold2 from "../../static/images/star-gold.svg";
import starGold3 from "../../static/images/star-gold.svg";
import starGold4 from "../../static/images/star-gold.svg";
import starGold5 from "../../static/images/star-gold.svg";
import review1 from "../../static/images/review-1.jpg";

const Review = () => {
    return (
        <div className="review characteristics__review">
            <div className="review__photo">
                <img className="review__img" src={review1} alt="" />
            </div>
            <div className="review__content">
                <h4 className="review__name">Марк Г.</h4>
            <div className="review__stars">
                <img className="review__star" src={starGold1} alt="star" />
                <img className="review__star" src={starGold2} alt="star" />
                <img className="review__star" src={starGold3} alt="star" />
                <img className="review__star" src={starGold4} alt="star" />
                <img className="review__star" src={starGold5} alt="star" />
            </div>
                <p className="review__text"><span>Опыт использования:</span> менее месяца</p>
                <p className="review__text"><span>Достоинства:</span> 
                это мой первый айфон после после огромного количества телефонов на андроиде.
                всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,
                ширик тоже на высоте.</p>
                <p className="review__text"><span>Недостатки:</span> 
                к самому устройству мало имеет отношение, но перенос данных с андроида - адская
                вещь) а если нужно переносить фото с компа, то это только через itunes,
                который урезает качество фотографий исходное</p>
            </div>
        </div>
    )
}

export default Review;