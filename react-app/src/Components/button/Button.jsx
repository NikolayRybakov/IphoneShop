const Button = ({btn, actived, ...restProps}) => {
    return (
        <button
            {...restProps} 
            className={`button ${actived ? "button_actived" : ""}`}>
            {btn}   
        </button>
    )
}

export default Button;