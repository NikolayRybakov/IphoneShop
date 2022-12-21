import Header from "../Header/Header";
import Breadcrumps from "../breadcrumps/Breadcrumps";
import Iphone from "../Iphone/Iphone";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import FormReview from "../form-review/FormReview";
import Footer from "../Footer/Footer";

const PageProduct = () => {
    return (
        <>
            <Header />
            <Breadcrumps />
            <Iphone />
            <Info />
            <Reviews/>
            <FormReview/>
            <Footer/>
        </>

    )
}

export default PageProduct;