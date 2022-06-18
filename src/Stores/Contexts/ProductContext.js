import { createContext, useReducer } from "react";
import ProductService from "../../Services/ProductService";
import { ErrorMessage, SuccessMessage } from "../../Utils/Alert/Alert";
import { getNowPersianDate } from "../../Utils/PersianDate";
import ProductReucer from "../Reducers/ProductReducer";

const initialProductState = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "",isAvailable:false, FromPrice: 0, ToPrice: 0, FromPublishDate: getNowPersianDate(), ToPublishDate: "1500/01/01" },
    productModel: { id: 0, productName: "", sku: "", Price: 0, PublishDate: getNowPersianDate(), stockQuantity: 0 }
}
export const ProductContext = createContext(null);


const productService = new ProductService();

const ProductProvider = ({ children }) => {

    const [producState, dispatch] = useReducer(ProductReucer, initialProductState)
    const { productListModel, productFilterModel, productModel } = producState;

    const SearchAllProduct = async () => {
        try {
            let list = await productService.SearchAllProduct();
            dispatch({ type: "setProductListModel", payload: list })

        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }
    const SearchProduct = async () => {
        try {
            let list = await productService.SearchProduct(productFilterModel);
            dispatch({ type: "setProductListModel", payload: list })

        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }
    const RegisterProduct = async () => {
        try {
            if (productModel.id === 0) {
                let id = await productService.registerProduct(productModel)
                productModel.id = id;
            }
            else {
                await productService.updateProduct(productModel)
            }
            SuccessMessage();
        }
        catch (err) {
            ErrorMessage(err.message)

        }

    }
    const FindProduct = async (id) => {
        try {
            let product = await productService.findProduct(id)
            dispatch({ type: "setProductModel", payload: product })

        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }
    const newProduct=async()=>{
        dispatch({type:"newProductModel"})

    }


    return (<ProductContext.Provider value={{
        productListModel, productFilterModel, productModel

        , SearchAllProduct, SearchProduct, RegisterProduct, FindProduct,newProduct
    }}>

        {children}
    </ProductContext.Provider>)


}
export default ProductProvider;