const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__contacts">
                        <h5 className="footer__name">
                            © ООО «IphoneShop», 2018-2022
                        </h5>
                        <p className="footer__info">
                            Для уточнения информации звоните по номеру <a href="tel:+79000000000">+7 900 000 0000</a>
                        </p>
                        <p className="footer__info">Предложения по сотрудничеству отправляйте на почту
                            <a href="mailto:partner@mymarket.com">partner@mymarket.com</a>
                        </p>
                    </div>
                    <a className="footer__anchor" href="#logo">Навверх</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;