const Breadcrumps = () => {
    return (
        <div className="breadcrumps">
            <div className="container">
                <ul className="breadcrumps__list">
                    <li className="breadcrumps__item">
                        <a className="breadcrumps__link" href="/">Электроника </a>
                    </li>
                    <li className="breadcrumps__item">
                        <a className="breadcrumps__link" href="/">Смарфтоны и гаджеты </a>
                    </li>
                    <li className="breadcrumps__item">
                        <a className="breadcrumps__link" href="/">Мобильные телефоны </a>
                    </li>
                    <li className="breadcrumps__item">
                        <a className="breadcrumps__link" href="/">Apple</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumps;