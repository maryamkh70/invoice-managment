

import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import AppContent from "../Components/AppContent/AppContent";

import AppHeader from "../Components/AppHeader/AppHeader";
import SideBar from "../Components/SideBar/SideBar";



const Layout = () => {
    const [showSidBar, setShowSidBar] = useState(true);
    const handleSideBar = () => {
        setShowSidBar(!showSidBar)
    }
    return (<div>
        <Stack gap={1} className="main" style={{ direction: "ltr", marginRight: showSidBar ? 230 : 0 }} >
            <AppHeader toggleButton={handleSideBar} />
            <AppContent />

        </Stack>)
        <SideBar show={showSidBar} />
    </div>)






}
export default Layout;