
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { AgGridReact } from 'ag-grid-react'

const GridView = (props) => {


    const onGridReady = () => {
        if (props.getData) {
            props.getData()
        }

   
        // document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(3).innerHtml();
        // document.getElementsByClassName("ag-paging-row-summary-panel").item(0).childNodes.item(7).innerHtml();
        // document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(1).inner.innerHtml();
        // document.getElementsByClassName("ag-paging-description").item(0).childNodes.item(5).inner.innerHtml();
    }
    return (<AgGridReact enableRtl pagination={true} paginationPageSize={10}  
        rowSelection={'multiple'} {...props} rowMultiSelectWithClick={true} onGridReady={onGridReady}
        rowData={props.listModel}  >
        {
            props.children
        }

    </AgGridReact>)



}
export default GridView;