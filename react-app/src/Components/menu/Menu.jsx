const Menu = () => {
    return (
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
    )
}

export default Menu;