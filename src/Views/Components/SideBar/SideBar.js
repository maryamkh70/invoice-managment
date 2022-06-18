import { Offcanvas } from "react-bootstrap";
import MenuProvider from "../../../Stores/Contexts/MenuConyext";
import Menu from "./Menu/Menu";

const SideBar = ({ show }) => {
    return <Offcanvas show={show} backdrop={false} scroll={true} placement="start">
        <Offcanvas.Header >
            <Offcanvas.Title>
                <h6>مدیریت فاکتور</h6>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <MenuProvider>
                <Menu />
            </MenuProvider>
        </Offcanvas.Body>
    </Offcanvas>


}
export default SideBar;