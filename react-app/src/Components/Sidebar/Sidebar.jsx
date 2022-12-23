import Price from "../price/Price";

const Sidebar = () => {
    return (
        <div className="sidebar characteristics__sidebar">
            <div className="sidebar__inner">
                <Price />
                <div className="iframe sidebar__iframe">
                    <h3 className="iframe__ads">Реклама</h3>
                    <iframe className="iframe__commercial" title="iframe" src=""></iframe>
                    <iframe className="iframe__commercial" title="iframe" src=""></iframe>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;