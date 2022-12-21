import Color from "../color/Color";
import Description from "../description/Description";
import Goods from "../goods/Goods";
import Memory from "../memory/Memory";
import Sidebar from "../sidebar/Sidebar";

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