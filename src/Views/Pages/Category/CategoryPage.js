import { useState } from "react";
import { Nav } from "react-bootstrap";
import CategorInfo from "./CategoryInfo";
import CategoryProduct from "./CategoryProduct";


const CategoryPage = () => {
    const [activeNav, setActiveNav] = useState(0)
    return (<div className="page" style={{ direction: "rtl" }}>
        <h3>دسته</h3>
        <hr />
        <Nav variant="tabs" defaultActiveKey={activeNav}>
            <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => { setActiveNav(1) }}>اطلاعات</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" onClick={() => { setActiveNav(2) }}> محصولات</Nav.Link>
            </Nav.Item>
         
        </Nav>
        {
            activeNav===1?<CategorInfo/>:<CategoryProduct/>
          
        }

    </div>)
}
export default CategoryPage;