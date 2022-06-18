import { Get, Post, Put } from "../Adapters/Api";
 export const getCategoryTreeListAction={type:"get" ,url:"Category/searchTree"}
 export const registerCategoryAction={type:"post" ,url:"Category"}
 export const updateCategoryAction={type:"put" ,url:"Category"}
 export const findCategoryAction={type:"get" ,url:"Category/find"}


export default class CategoryService
{
    searchCategoryTreeList()
    {
        return Get(getCategoryTreeListAction);
    }
    registerCategory(category)
    {
        return Post(registerCategoryAction,category)

    }
    updateCategory(category)
    {
        return Put(updateCategoryAction,category)

    }
    findCategory(id)
    {
        return Get({url:findCategoryAction.url+"/"+id})

    }
}