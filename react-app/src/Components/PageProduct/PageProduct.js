import "./PageProduct.scss";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Iphone from "../Iphone/Iphone";
import Characteristics from "../Characteristics/Characteristics";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";


const PageProduct = () => {
    return (
        <>
            <Header />
            <Nav/>
            <Iphone/>
            <Characteristics />
            <Reviews/>
            <Footer />
        </>

    )
}

export default PageProduct;