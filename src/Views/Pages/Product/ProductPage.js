import { useState } from "react";
import { Nav } from "react-bootstrap";
import ProductCategories from "./ProductCategories";
import ProductInfo from "./ProductInfo";
import ProductPictures from "./ProductPictuers";


const ProductPage = () => {
    const [activeNav, setActiveNav] = useState(1)
    return (<div className="productpage" style={{ direction: "rtl" }}>
        <h3>محصولات</h3>
        <hr />
        <Nav variant="tabs" defaultActiveKey={activeNav}>
            <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => { setActiveNav(1) }}> اطلاعات محصول</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" onClick={() => { setActiveNav(2) }}> تصاویرمحصول</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" onClick={() => { setActiveNav(3) }}> گروه بندی محصول</Nav.Link>
            </Nav.Item>
        </Nav>
        {
            activeNav===1?<ProductInfo/>:
            (activeNav===2?<ProductPictures/>:<ProductCategories/>)
        }

    </div>)
}
export default ProductPage;