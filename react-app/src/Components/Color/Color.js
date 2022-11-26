import "../colors/color.scss"

const Color = ({img, actived}) => {

    let color__border = `color__border ${actived ? "color__border_red" : ""}`;

    return (
        <div className={color__border}>
            <img className="color__img" 
            src={img} 
            alt="characteristic-color__img" />
        </div>
    )
}

export default Color;