import {Link} from "react-router-dom";
import classes from "./content.module.css";

const Content = () => {
    return (
        <div className={classes.content}>
            <div className="container">
                <div className={classes.content__inner}>
                    <p className={classes.content__paragraph}>
                        Здесь должно быть содержимое главной страницы. <br />
                        Но в рамках курса главная страница  используется лишь <br />
                        в демонстрационных целях
                    </p>
                    <Link to="/product" className={classes.content__link}>
                        Перейти на страницу товара
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Content;