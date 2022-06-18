import { createContext, useState } from "react";




export const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {

    const menuList = [
        {
            title: "داشبورد", icon: "fa fa-home",
            subMenus: [{ title: "داشبورد", icon: "fa fa-bar-chart-o", to: "dashborad" },
            { title: "امار", icon: "fa fa-lightbulb-o", to: "" }]
        },
        {
            title: "کاتالوگ", icon: "fa fa-sitemap",
            subMenus: [{ title: "مدیریت محصولات", icon: "fa fa-product-hunt", to: "product" },
            { title: "لیست محصولات", icon: "fa fa-list-alt", to: "productList" },
            { title: "دسته بندی", icon: "fa fa-list-alt", to: "category" },
            { title: "لیست دسته بندی ", icon: "fa fa-list-alt", to: "categoryList" }]
        },
        { title: "مشتریان", icon: "fa fa-user" },
        { title: "فروش", icon: "fa fa-shopping-bag" },
        { title: "مدیریت نرم افزار", icon: "fa fa-gear" },
        { title: "راهنما", icon: "fa fa-question" }];

    const [activeMenu, setActiveMenu] = useState(0);

    const selectMenu = (index) => {
        setActiveMenu(index)

    }

    return <MenuContext.Provider value={{ selectMenu, activeMenu, menuList }}>
        {children}

    </MenuContext.Provider>
}
export default MenuProvider