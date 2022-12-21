import Line from "../line/Line";
import review1 from "./../../static/images/review-1.jpg";
import review2 from "./../../static/images/review-2.jpg";
import starGold from "./../../static/images/star-gold.svg";
import starGrey from "./../../static/images/star-grey.svg";

const Reviews = () => {
    return (
        <div className="reviews reviews_padding-top">
            <div className="container">
                <div className="reviews__inner">
                    <div className="reviews__top">
                        <h2 className="reviews__title">
                            Отзывы
                        </h2>
                        <div className="reviews__number">
                            425
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__photo">
                            <img className="review__img" src={review1} alt="review1" />
                        </div>
                        <div className="review__content">
                            <h4 className="review__name">Марк Г.</h4>
                            <div className="review__stars">
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
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
                    <Line />
                    <div className="review">
                        <div className="review__photo">
                            <img className="review__img" src={review2} alt="review2" />
                        </div>
                        <div className="review__content">
                            <h4 className="review__name">Валерий Коваленко</h4>
                            <div className="review__stars">
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGold} alt="star" />
                                <img className="review__star" src={starGrey} alt="star" />
                            </div>
                            <p className="review__text"><span>Опыт использования:</span>менее месяца</p>
                            <p className="review__text"><span>Достоинства:</span>
                                OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго</p>
                            <p className="review__text"><span>Недостатки:</span> Плохая ремонтопригодность</p>
                        </div>
                    </div>
                </ div>
            </ div>
        </ div>
    )
}

export default Reviews;