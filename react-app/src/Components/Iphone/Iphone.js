import "./Iphone.scss";
import image1 from "../../static/images/image-1.webp";
import image2 from "../../static/images/image-2.webp";
import image3 from "../../static/images/image-3.webp";
import image4 from "../../static/images/image-4.webp";
import image5 from "../../static/images/image-5.webp";

const Iphone = () => {
    return (
        <div className="iphone">
            <div className="container">
                <h2 className="title">Смартфон Apple iPhone 13</h2>
                <div className="iphone__inner">
                    <img className="iphone__img" src={image1} alt="Apple Iphone-13" />
                    <img className="iphone__img" src={image2} alt="Apple Iphone-13" />
                    <img className="iphone__img" src={image3} alt="Apple Iphone-13" />
                    <img className="iphone__img" src={image4} alt="Apple Iphone-13" />
                    <img className="iphone__img" src={image5} alt="Apple Iphone-13" />
                </div>
            </div>
      </div>
    )
}

export default Iphone;