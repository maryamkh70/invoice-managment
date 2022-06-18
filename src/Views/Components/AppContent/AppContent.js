import { Outlet } from "react-router";


const AppContent = () => {
    return <div style={{ minHeight: 850, backgroundColor: "#f7f7f7", padding: 20, color: "black" }}>

        <Outlet />

    </div>
}
export default AppContent;