/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import TextInput from "../Component/Form/TextInput";
import SelectInput from "../Component/Form/SelectInput";
import CategoryViewService from "../../../ViewService/CategoryViewService";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const CategorInfo = () => {
    const categoryModel=useSelector(state=>state.category.categoryModel)
    const categoryTreeListModel=useSelector(state=>state.category.categoryTreeListModel)
    const{SearchCategotyTreeList, RegisterCategory,FindCategory,NewCategory}=CategoryViewService()
    const navigate=useNavigate();
    const {categoryid}=useParams();
   

    

    useEffect(()=>{
        SearchCategotyTreeList();
        if(categoryid)
        {
            FindCategory(categoryid)
        }
        else
        {
            NewCategory();
        }
    },[categoryid])


    return (<Container fluid className="fade alert alert-light show">
        <Row>
            <Col xs={12} sm={4}>
                <Row>
                    <Col>
                        <form>
                            <TextInput id="name" model={categoryModel} description="نام دسته"/>
                            <SelectInput id="parentId" model={categoryModel} description="والد" list={categoryTreeListModel} text="hierarchicalName"/>

                        </form>
                    </Col>

                </Row>
                <Row>
                    <Col  className="mt-4 btn-group">
                        <Button variant="danger" className="btn-block" style={{float:"left"}} 
                        onClick={()=>{navigate("/category")}}>  ثبت جدید</Button>
                        <Button variant="success" className="btn-block"style={{float:"left"}}
                        onClick={()=>{ RegisterCategory()}} >ثبت</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={4}>
            </Col>
        </Row>


    </Container>)
}
export default CategorInfo;

