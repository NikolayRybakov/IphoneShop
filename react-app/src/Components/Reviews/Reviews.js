import Review from "../review/Review";
import FormReview from "../form-review/FormReview";

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
                </ div>
                    <Review/>
                    <FormReview />
            </ div>
        </ div>
    )
}
  
export default Reviews;