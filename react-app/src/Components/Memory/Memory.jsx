import Button from "../button/Button";
import { useState } from "react";

const Memory = () => {

  const [button, setButton] = useState()

  let buttons = [
    {id: 1, btn: "128 ГБ"},
    {id: 2, btn: "256 ГБ"},
    {id: 3, btn: "512 ГБ"},
  ]

  const handleButton = (id) => {
    setButton(id)
  }

    return (
        <div className="memory characteristics__memory">
        <h3 className="subtitle subtitle_margin-bottom">Конфигурация памяти:</h3>
        <div className="memory__inner">
          {buttons.map(value => (
            <Button 
              key={value.id} 
              btn={value.btn}
              actived={value.id === button}
              onClick={() => handleButton(value.id)}
            />
          ))}
        </div>
      </div>
    )
}

export default Memory;