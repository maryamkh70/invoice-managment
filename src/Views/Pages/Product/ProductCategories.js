import { useSelector } from "react-redux";
import { Col, Container, Row, Alert,Button,Stack } from "react-bootstrap";
import { AgGridColumn } from 'ag-grid-react';
import GridView from '../Component/GridView/GridView.js'
import { SelectInput } from '../Component/Form/Index'
import ProductViewService from "../../../ViewService/ProductViewService.js";
import CategoryViewService from "../../../ViewService/CategoryViewService.js";
import { useEffect } from "react";





const ProductCategories = () => {
   const productModel = useSelector(state => state.product.productModel)
   const productCategoryModel = useSelector(state => state.product.productCategoryModel)
   const categoryTreeListModel = useSelector(state => state.category.categoryTreeListModel)
   const productCategoriesListModel = useSelector(state => state.product.productCategoriesListModel)

   const { RegisterProductCategory } = ProductViewService();
   const{SearchCategotyTreeList,GetProductCategories}=CategoryViewService();
   useEffect(()=>{
      SearchCategotyTreeList();
   })
 
   return (<Container fluid className="fade alert alert-light show">
      {
         productModel.id !== 0 ?
            <>
               <Row>
                  <Col>
                     <div className="ag-theme-alpine" style={{ height: 600 }}>
                        <GridView listModel={productCategoriesListModel} getData={GetProductCategories}>
                           <AgGridColumn field="herar" headerName="نام"/>

                        
                        </GridView>
                     </div>

                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Stack gap={3}>

                        <div className="text-center">
                           <Col sm={{ span: 2, offset: 5 }}>
                            <SelectInput model={productCategoryModel} id="categoryID" description="دسته"
                                 list={categoryTreeListModel.filter(p => p.id !== 1)} text="hierarchicalName"/>
                           </Col>

                        </div>

                        <div className="text-center" >
                              <Button variant="success" onClick={RegisterProductCategory}>ثبت</Button>

                        </div>


                     </Stack>
                  </Col>
               </Row>
            </>
            : <Row>
               <Col>
                  <Alert variant="danger">
                     ابتدا محصول باید ثبت گردد

                  </Alert>
               </Col>
            </Row>


      }

   </Container >)
}



export default ProductCategories;