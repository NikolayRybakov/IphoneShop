import "./FormReview.scss";

const FormReview = () => {
    return (
        <div className="form-review characteristics__form-review">
            <form className="form-review__info" action="" >
                <h3 className="subtitle form-review__subtitle">
                    Добавить свой отзыв
                </h3>  
                <div className="form-review__input">
                    <input className="form-review__input-text" type="text" name="name" placeholder="Имя и фамилия" />
                    <input className="form-review__input-number" type="number" name="raiting" min="1" max="5" placeholder="Оценка" />
                </div>
                <div className="form-review__textarea">
                    <textarea className="form-review__textarea-box" placeholder="Текст отзыва"></textarea>
                </div>
                <div className="form-review__button">Отправить отзыв</div>
            </form>
        </div>
    )
}

export default FormReview;