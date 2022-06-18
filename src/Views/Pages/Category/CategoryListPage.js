import { Container, Row } from 'react-bootstrap'
import GridView from '../Component/GridView/GridView.js'
import { AgGridColumn } from 'ag-grid-react'
import { useSelector } from 'react-redux'
import CategoryViewService from '../../../ViewService/CategoryViewService.js'
import { Link } from 'react-router-dom'


const CategoryListPage = () => {
    const categoryTreeListModel=useSelector(state=> state.category.categoryTreeListModel)
    const {SearchCategotyTreeList}=CategoryViewService();

    const renderhierarchicalName=(params)=>{
        return (<Link to={"/category/"+params.data.id}> {params.data.hierarchicalName}</Link>)

    }
    console.log(categoryTreeListModel)
    return (
        <Container fluid className="page">
            <Row>
                <h4> لسیت دسته ها</h4>
                <hr />
            </Row>

            <Row className="mt-4">
                <div className="ag-theme-alpine" style={{ height: 600 }}>
                    <GridView listModel={categoryTreeListModel} getData={SearchCategotyTreeList} framWorkComponent={{ renderhierarchicalName: renderhierarchicalName }} >

                        <AgGridColumn field="hierarchicalName" headerName="نام دسته" width={400} cellRenderer="renderhierarchicalName" />
                 
                    </GridView>

                </div>)


            </Row>

        </Container>)
}
export default CategoryListPage;
