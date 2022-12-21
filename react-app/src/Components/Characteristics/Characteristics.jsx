import Color from "../color/Color";
import Description from "../Description/Description";
import Goods from "../Goods/Goods";
import Memory from "../Memory/Memory";
import Sidebar from "../Sidebar/Sidebar";

const Characteristics = () => {
    return (
        <div className="characteristics">
            <div className="characteristics__inner">
                <Color />
                <Memory />
                <Goods />
                <Description />
            </div>
            <Sidebar />
        </div>
    )
}

export default Characteristics;