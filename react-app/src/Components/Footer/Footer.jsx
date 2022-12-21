import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className={classes.footer__inner}>
                    <div className={classes.footer__contacts}>
                        <h5 className={classes.footer__name}>
                            © ООО «IphoneShop», 2018-2022
                        </h5>
                        <p className={classes.footer__info}>
                            Для уточнения информации звоните по номеру <a href="tel:+79000000000">+7 900 000 0000</a>
                        </p>
                        <p className={classes.footer__info}>Предложения по сотрудничеству отправляйте на почту
                            <a href="mailto:partner@mymarket.com">partner@mymarket.com</a>
                        </p>
                    </div>
                    <a className={classes.footer__anchor} href="#logo">Навверх</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;