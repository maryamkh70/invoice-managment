/* eslint-disable jsx-a11y/anchor-is-valid */


import './Product.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TextInput from '../Component/Form/TextInput'
import DatePickerInput from '../Component/Form/DatePickerInput'
import CheckBoxInput from '../Component/Form/CheckBoxInput'
import ProducrGrid from './ProducrGrid'
import { useSelector } from 'react-redux'
import ProductViewService from '../../../ViewService/ProductViewService'
import { Link } from 'react-router-dom'



const ProductListPage = () => {
    const productFilterModel = useSelector(state => state.product.productFilterModel)

    const { SearchProducts } = ProductViewService();


    return (
        <Container fluid className="productPage">
            <Row>
                <h4>لیست محصولات</h4>
                <hr />
            </Row>
            <Row>
                <Col sm><TextInput model={productFilterModel} description="نام محصول" id="productName" /></Col>
                <Col sm><TextInput model={productFilterModel} description="کدمحصول" id="sku" /></Col>
                <Col xs={0}></Col>
            </Row>
            <Row className="mt-2">
                <Col><TextInput model={productFilterModel} description="ازقیمت" id="FromPrice" /></Col>
                <Col><TextInput model={productFilterModel} description="تا قیمت" id="ToPrice" /></Col>
                <Col xs={0}></Col>
            </Row>
            <Row className="mt-2">
                <Col><DatePickerInput model={productFilterModel} description="ازتاریخ" id="FromPublishDate" /></Col>
                <Col><DatePickerInput model={productFilterModel} description="تاتاریخ" id="ToPublishDate" /></Col>
                <Col xs={0}></Col>

            </Row>
            <Row className="mt-2">
                <Col><CheckBoxInput model={productFilterModel} description="فقط موجودی" id="isAvailable" /></Col>
                <Col></Col>
                <Col> <Button variant="success" style={{ float: 'left' }} onClick={SearchProducts}>جستجو</Button></Col>

            </Row>
            <Row className="mt-4">
                <ProducrGrid />
            </Row>
            <Row className="mt-2">
                <Col>

                    <Link to="/productCards" className="nav-link">
                        <i className="fa fa-search" ></i>
                        <span>کاتولوگ محصولات</span>

                    </Link>
                </Col>
            </Row>


        </Container>
    )
}
export default ProductListPage;
