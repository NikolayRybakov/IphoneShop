import "./Reviews.scss";
import Review from "../Review/Review";
import FormReview from "../FormReview/FormReview";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Reviews = () => {
    return (
        <>
            <Review />
            <Review />
            <FormReview />
            <Sidebar />
            <Footer />
        </>
    )
}

export default Reviews;