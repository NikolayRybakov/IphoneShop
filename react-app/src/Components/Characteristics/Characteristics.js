import Color from "../color/Color";
import Memory from "../Memory/Memory";
import Goods from "../Goods/Goods";
import Description from "../Description/Description";
import Table from "../Table/Table";
import Reviews from "../Reviews/Reviews";
import Sidebar from "../Sidebar/Sidebar";
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