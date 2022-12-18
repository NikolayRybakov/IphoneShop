import {Link} from "react-router-dom";

const Content = () => {
    return (
        <div className="content-text">
            <div className="container">
                <div className="content-text__block">
                    <p className="content-text__paragraph">Здесь должно быть содержимое главной страницы. <br/>
                        Но в рамках курса главная страница  используется лишь <br/>
                        в демонстрационных целях
                    </p>
                    <Link className="content-text__link" to="/product">Перейти на страницу товара</Link>
                </div>
            </div>
        </div>
    )
}

export default Content;