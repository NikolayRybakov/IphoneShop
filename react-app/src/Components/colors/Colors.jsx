import { useState } from 'react';
import Color from '../color/Color';
import color1 from './../../static/images/color-1.webp';
import color2 from './../../static/images/color-2.webp';
import color3 from './../../static/images/color-3.webp';
import color4 from './../../static/images/color-4.webp';
import color5 from './../../static/images/color-5.webp';
import color6 from './../../static/images/color-6.webp';

const Colors = () => {

    const [color, setColor] = useState();

    const handleColor = (id) => {
        setColor(id)
    }

    let colors = [
        {id: 1, image: color1},
        {id: 2, image: color2},
        {id: 3, image: color3},
        {id: 4, image: color4},
        {id: 5, image: color5},
        {id: 6, image: color6},
    ]

    return (
        <div className="colors characteristics__color">
            <h3 className="subtitle subtitle_margin-bottom">Цвет товара: </h3>
            <div className="colors__group">
                {colors.map(value => (
                    <Color 
                    key={value.id} 
                    image={value.image}
                    actived={value.id === color}
                    onClick={() => handleColor(value.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Colors;