
import { Col, Container, Row } from "react-bootstrap";
import TextInput from "../Component/Form/TextInput";
import NumberInput from "../Component/Form/NumberInput";
import { Button } from "react-bootstrap";
import {  useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ProductViewService from '../../../ViewService/ProductViewService'

import DatePickerInput from "../Component/Form/DatePickerInput";
import { useSelector } from "react-redux";


const ProductInfo = () => {
    const  productModel=useSelector(state => state.product.productModel)
    const {  RegisterProduct, FindProduct, NewProduct } = ProductViewService();

    const { productid } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        if (productid) {
            FindProduct(productid)
        }
        else {
            NewProduct()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productid]);

   


    return (<Container fluid className="fade alert alert-light show">
        <Row>
            <Col xs={12} sm={4}>
                <Row>
                    <Col>
                        <form>
                            <TextInput model={productModel} description="نام محصول" id="productName" />
                            <TextInput model={productModel} description="کدمحصول" id="sku" />
                            <NumberInput model={productModel} description="قیمت" id="price" />
                            <NumberInput model={productModel} description="تعدادموجودی" id="stockQuantity" />
                             <DatePickerInput model={productModel} description="تاریخ انتشار" id="publishDate" />

                        </form>
                    </Col>

                </Row>
                <Row>
                    <Col className="btn-group mt-2">
                        <Button variant="danger" className="btn-block" onClick={()=>{navigate("/product/")}} >  ثبت جدید</Button>
                        <Button variant="success" className="btn-block" 
                        onClick={async()=>{await RegisterProduct();navigate("/product/"+productModel.id)}}>ثبت</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={4}>
            </Col>
        </Row>


    </Container>)
}
export default ProductInfo;