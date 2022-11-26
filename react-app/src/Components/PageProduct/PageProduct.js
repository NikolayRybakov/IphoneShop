import Header from "../header/Header";
import Nav from "../nav/Nav";
import Iphone from "../iphone/Iphone";
import Characteristics from "../characteristics/Characteristics";
import Footer from "../footer/Footer";

const PageProduct = () => {

    const links = [
        {id: 1, name: "Электроника > "},
        {id: 2, name: "Смарфтоны и гаджеты > "},
        {id: 3, name: "Мобильные телефоны > "},
        {id: 4, name: "Apple"},
    ]

    return (
        <>
            <Header />
            <Nav items={links}/>
            <Iphone />
            <Characteristics />
            <Footer/>
        </>
    )
}

export default PageProduct;