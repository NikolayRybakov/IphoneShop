import Color from "../color/Color";
import Memory from "../memory/Memory";
import Goods from "../goods/Goods";
import Description from "../description/Description";
import Table from "../table/Table";
import Reviews from "../reviews/Reviews";
import Sidebar from "../sidebar/Sidebar";

const Characteristics = () => {
    return (
        <>
            <Color />
            <Memory />
            <Goods />
            <Description />
            <Table />
            <Reviews />
            <Sidebar/>
        </>

    )
}

export default Characteristics;