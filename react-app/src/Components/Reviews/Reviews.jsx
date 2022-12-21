import Line from "../line/Line";
import Review from "../Review/Review";

const Reviews = () => {
    return (
        <div className="reviews reviews_padding-top">
            <div className="container">
                <div className="reviews__inner">
                    <div className="reviews__top">
                        <h2 className="reviews__title">
                            Отзывы
                        </h2>
                    </div>
                    <div className="reviews__number">
                        425
                    </div>
                    <Review />
                    <Line />    
                </div>
            </ div>
        </ div>
    )
}

export default Reviews;