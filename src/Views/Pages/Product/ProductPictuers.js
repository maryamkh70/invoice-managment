
import { useRef } from "react";
import { Alert, Col, Container, Image, Row, Stack, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductViewService from "../../../ViewService/ProductViewService";
import NumberInput from "../Component/Form/NumberInput";
import { AgGridColumn } from 'ag-grid-react';
import GridView from '../Component/GridView/GridView.js'


const ProductPictures = () => {
   const { productModel, pictureModel, pictureProductModel ,pictureProductListModel} = useSelector(state => {
      return {
         productModel: state.product.productModel
         , pictureModel: state.product.pictureModel,
         pictureProductModel: state.product.pictureProductModel,
         pictureProductListModel:state.product.pictureProductListModel
      }
   });
   const { SelectImage, RegistrProductPicture,GetProductPicture } = ProductViewService();
   const btnUploadRef = useRef();

   const openFileDialogClick = () => {
      btnUploadRef.current.click();
   }
   const handleFile = (event) => {
      SelectImage(event.target.files[0])

   }
   const renderPicture=(params)=>{
      return(  <Image thumbnail style={{ width: 150, height: 150 }} src={params.data.url}/>)

   }

   return (<Container fluid className="fade alert alert-light show">
      {
         productModel.id !== 0 ?
            <>
               <Row>
                  <Col>
                     <div className="ag-theme-alpine" style={{ height: 500 ,width:"100%" }}>
                        <GridView listModel={pictureProductListModel} getData={GetProductPicture} 
                        frameworkComponents={{"renderPicture":renderPicture}} rowHeight={150}>

                           <AgGridColumn field="pictureID" width="300"  headerName="عکس محصول"  cellRenderer="renderPicture"/>
                           <AgGridColumn field="displayOrder" width="200" headerName="ترتیب نمایش" />
                     
                        </GridView>
                     </div>

                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Stack gap={3}>
                        <div className="text-center">
                           <Image thumbnail style={{ width: 140, height: 140 }}
                              src={pictureModel.file ? URL.createObjectURL(pictureModel.file) : "/logo.192.png/"} onClick={openFileDialogClick} />
                        </div>

                        <div className="text-center">
                           <span className="fa fa-upload text-danger fa-2x" style={{ cursor: "pointer" }} onClick={openFileDialogClick} />
                           <input onChange={handleFile} ref={btnUploadRef} type="file" style={{ display: "none" }} />
                        </div>
                        <div className="text-center">
                           <Col sm={{ span: 2, offset: 5 }}>
                              <NumberInput model={pictureProductModel} id="displayOrder" description="ترتیب نمایش" />
                           </Col>

                        </div>

                        <div className="text-center">
                           <Button variant="success" onClick={RegistrProductPicture}>ثبت</Button>

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
export default ProductPictures;