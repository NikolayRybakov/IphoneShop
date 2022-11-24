const Table = () => {
    return (
        <div className="table characteristics__table">
            <h3 className="subtitle subtitle_margin-bottom">Сравнение моделей</h3>
            <div className="table__inner">
                <div className="table__column">
                    <h3 className="table__title">Модель</h3>
                    <div className="table__descr">iPhone 11</div>
                    <div className="table__descr">iPhone 12</div>
                    <div className="table__descr">iPhone 13</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Вес</h3>
                    <div className="table__descr">194 грамма</div>
                    <div className="table__descr">164 грамма</div>
                    <div className="table__descr">174 грамма</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Высота</h3>
                    <div className="table__descr">150.9 мм</div>
                    <div className="table__descr">146.7 мм</div>
                    <div className="table__descr">146.7 мм</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Ширина</h3>
                    <div className="table__descr">75.7 мм</div>
                    <div className="table__descr">71.5 мм</div>
                    <div className="table__descr">71.5 мм</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Толщина</h3>
                    <div className="table__descr">8.3 мм</div>
                    <div className="table__descr">7.4 мм</div>
                    <div className="table__descr">7.65 мм</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Чип</h3>
                    <div className="table__descr">A13 Bionic chip</div>
                    <div className="table__descr">A14 Bionic chip</div>
                    <div className="table__descr">A15 Bionic chip</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Объём памяти</h3>
                    <div className="table__descr">до 128 Гб</div>
                    <div className="table__descr">до 256 Гб</div>
                    <div className="table__descr">до 512 Гб</div>
                </div>
                <div className="table__column">
                    <h3 className="table__title">Аккумулятор</h3>
                    <div className="table__descr">до 17 часов</div>
                    <div className="table__descr">до 19 часов</div>
                    <div className="table__descr">до 19 часов</div>
                </div>
            </div>
        </div>
    )
}

export default Table;