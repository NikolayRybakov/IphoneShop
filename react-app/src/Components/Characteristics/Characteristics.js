import Colors from "../colors/Colors";
import Memory from "../memory/Memory";
import Goods from "../goods/Goods";
import Description from "../description/Description";
import Table from "../table/Table";
import Reviews from "../reviews/Reviews";
import Sidebar from "../sidebar/Sidebar";

const Characteristics = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="characteristics">
                    <div className="characteristics__inner">
                        <Colors />
                        <Memory />
                        <Goods />
                        <Description />
                        <Table />
                        <Reviews />
                    </ div>
                    <Sidebar />
                </ div >
            </ div>
        </ div>
    )
}

export default Characteristics;