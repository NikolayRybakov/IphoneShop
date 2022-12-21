import classes from "./breadcrumps.module.css";

const Breadcrumps = () => {
    return (
        <div className={classes.breadcrumps}>
            <div className="container">
                <ul className={classes.breadcrumps__list}>
                    <li className={classes.breadcrumps__item}>
                        <a className={classes.breadcrumps__link} href="/">Электроника </a>
                    </li>
                    <li className={classes.breadcrumps__item}>
                        <a className={classes.breadcrumps__link} href="/">Смарфтоны и гаджеты </a>
                    </li>
                    <li className={classes.breadcrumps__item}>
                        <a className={classes.breadcrumps__link} href="/">Мобильные телефоны </a>
                    </li>
                    <li className={classes.breadcrumps__item}>
                        <a className={classes.breadcrumps__link} href="/">Apple</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumps;