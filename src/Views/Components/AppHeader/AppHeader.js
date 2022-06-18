import { Container, Dropdown, Navbar } from "react-bootstrap";


 const AppHeader=({toggleButton})=>{
  return <Navbar bg="light" expand={false}>
    <Container fluid>
        <Dropdown className="user-profile" style={{ direction: "ltr" }}>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
                مریم خداداد
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">پروفایل</Dropdown.Item>
                <Dropdown.Item href="#/action-2">خروج</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>

        <Navbar.Brand>

        </Navbar.Brand>


        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleButton} />

    </Container>
</Navbar>

 }
 export default AppHeader;