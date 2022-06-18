


import { AgGridColumn } from 'ag-grid-react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductViewService from '../../../ViewService/ProductViewService'
import GridView from '../Component/GridView/GridView.js'

const ProductGrid = () => {
    const productListModel = useSelector(state => state.product.productListModel)
    const {SearchAllProduct}=ProductViewService();



    
    const renderProductName = (params) => {
        return (<Link to={"/product/" + params.data.id}>{params.data.productName}</Link>)
    }
    return (<div className="ag-theme-alpine" style={{ height: 600 }}>
        <GridView rowHeight={200} listModel={productListModel} getData={SearchAllProduct} frameworkComponents={{ renderProductName: renderProductName }}>

            <AgGridColumn field="productName" headerName="نام محصول" cellRenderer="renderProductName" />
            <AgGridColumn field="sku" headerName="کدمحصول در انبار" />
            <AgGridColumn field="price" headerName="قیمت" />
            <AgGridColumn field="stockQuantity" headerName=" موجودی انبار" />
            <AgGridColumn field="localPublishDate" headerName="تاریخ انتشار" />
            <AgGridColumn field="localCreateOn" headerName="تاریخ ایجاد" />
        </GridView>




    </div>)

}



export default ProductGrid;