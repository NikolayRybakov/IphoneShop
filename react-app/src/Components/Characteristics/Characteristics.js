import Color from "../color/Color";
import Memory from "../memory/Memory";
import Goods from "../goods/Goods";
import Description from "../description/Description";
import Table from "../table/Table";
import Reviews from "../reviews/Reviews";
import Sidebar from "../sidebar/Sidebar";
import FormReview from "../form-review/form-review";

const Characteristics = () => {
    return (
        <div className="characteristics">
            <div className="characteristics__inner">
                <Color />
                <Memory />
                <Goods />
                <Description />
                <Table />
                <Reviews />
                <FormReview/>
            </div>
            <Sidebar />
        </div>
    )
}

export default Characteristics;