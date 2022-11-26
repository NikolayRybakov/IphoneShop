const Memory = () => {

    const memory = [
        {id: 1, gb: "128 ГБ"},
        {id: 2, gb: "256 ГБ"},
        {id: 3, gb: "512 ГБ"},
    ]

    return (
        <div className="memory characteristics__memory">
            <h3 className="subtitle subtitle_margin-bottom">Конфигурация памяти: 128 ГБ</h3>
            <div className="memory__inner">
                {memory.map((value) => (
                    <div className="button" key={value.id}>{value.gb}</div>
                ))} 
            </div>
        </div>
    )
}

export default Memory;