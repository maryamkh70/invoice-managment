/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext } from "react";
import { MenuContext } from "../../../../Stores/Contexts/MenuConyext";
import MenuItem from "./MenuItem";


const Menu = () => {
    const {menuList}=useContext(MenuContext)

    return <div className="memu_section">
        <ul className="nav side-menu page-sidebar-menu side-show">
            {
                menuList && menuList.map((value, index) => {
                    return (<MenuItem index={index} title={value.title} icon={value.icon} subMenus={value.subMenus} key={index}/>)

                })
            }


        </ul>
    </div>


}
export default Menu;