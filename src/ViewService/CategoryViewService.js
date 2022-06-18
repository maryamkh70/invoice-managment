import { useDispatch } from "react-redux";
import CategoryService from "../Services/CategorySevice";
import mainStore from "../Stores/Redux/MainStore";
import { ErrorMessage, SuccessMessage } from "../Utils/Alert/Alert";




const categoryService = new CategoryService();

const CategoryViewService = () => {
    const dispatch = useDispatch();


    const SearchCategotyTreeList = async () => {
        try {
            let list = await categoryService.searchCategoryTreeList();
    
            dispatch({ type: "setCategoryListModel", payload: list })
        }
        catch (err) {
            ErrorMessage(err.message)

        }

    }
    const RegisterCategory = async () => {
        const { categoryModel } = mainStore.getState().category;
       
        try {
            if (categoryModel.id === 0) {
                let category = await categoryService.registerCategory(categoryModel)
              
                categoryModel.id = category.id
           
           
            }
            else {
                await categoryService.updateCategory(categoryModel)
            }
            SuccessMessage();
        }
        catch (err) {
            ErrorMessage(err.message)

        }

    }
    const FindCategory = async(id) => {
        try 
        {
            let category=await categoryService.findCategory(id)
            dispatch({type:"setCategoryModel",payload:{id:category.id ,name:category.name, parentId:category.parentId}})

        }
        catch (err) 
        {
            ErrorMessage(err.message)

        }

    }
    const NewCategory=()=>{
        dispatch({type:"newCategoryModel"})

    }


    return { SearchCategotyTreeList, RegisterCategory, FindCategory,NewCategory }

}
export default CategoryViewService;