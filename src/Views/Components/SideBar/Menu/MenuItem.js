/* eslint-disable jsx-a11y/anchor-is-valid */


import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../../../Stores/Contexts/MenuConyext";



const MenuItem = ({ title, icon, subMenus,index }) => {

    const {selectMenu, activeMenu}=useContext(MenuContext);


    return <li className={activeMenu===index ? "active":""}>
        <a className="nav-link" onClick={() => {selectMenu(index)  }}>
            <i className={icon}></i>
            <span className="title">{title}</span>
            <i className="fa fa-chevron-left"></i>
        </a>
        <div className=" nav child_menu">
            <Collapse in={activeMenu===index}>
                <ul>
                    {
                        subMenus && subMenus.map((value,i)=>{
                            return <li>
                            <Link to={value.to} className="nav-link">
                                <i className={value.icon}></i>
                                <span>{value.title}</span>

                            </Link>
                        </li>

                        })
                        
                    }

                </ul>
            </Collapse>
        </div>
    </li>

}
export default MenuItem;