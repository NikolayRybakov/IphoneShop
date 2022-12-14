import Review from "./../Review/Review";

const Reviews = () => {
    return (
        <div className="reviews characteristics__reviews">
            <div className="reviews__inner">
                <div className="reviews__top">
                    <h2 className="reviews__title">
                        Отзывы
                    </h2>
                    <div className="reviews__number">
                        425
                    </div>
                </div>
                <Review />
            </div>
        </div >
    )
}

export default Reviews;