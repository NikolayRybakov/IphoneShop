import Review from "../review/Review";
import FormReview from "../form-review/FormReview";

const Reviews = () => {
    return (
        <>
            <h2 className="reviews__title">
                Отзывы
            </h2>
            <div className="reviews__number">
                425
            </div>
            <Review/>
            <FormReview />
        </>

    )
}
  
export default Reviews;