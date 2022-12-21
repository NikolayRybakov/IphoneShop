const Color = ({image, actived, ...props}) => {
    return (
        <button {...props} className={`color__button ${actived ? "color__button_active" : ""}`}>
            <img className="color__img-button" src={image} alt="characteristic-color__img-button" />
        </button>
    )
}

export default Color;