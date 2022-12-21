const Goods = () => {
    return (
        <div className="goods characteristics__goods">
            <h3 className="subtitle subtitle_margin-bottom">Характеристики товара</h3>
            <div className="menu">
                <ul className="menu__list">
                    <li className="menu__item">Экран: 6.1</li>
                    <li className="menu__item">Встроенная память: 128 ГБ</li>
                    <li className="menu__item">Операционная система: iOS 15</li>
                    <li className="menu__item">Беспроводные интерфейсы: NFC, Bluetooth, Wi-Fi</li>
                    <li className="menu__item">Процессор: <a className="menu__link" href="/">Apple A15 Bionic</a></li>
                    <li className="menu__item">Вес: 173 г</li>
                </ul>
            </div>
        </div>
    )
}

export default Goods;