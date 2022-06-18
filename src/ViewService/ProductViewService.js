
import { useDispatch } from "react-redux";
import ProductService from "../Services/ProductService";
import { ErrorMessage, SuccessMessage } from "../Utils/Alert/Alert";
import MainStore from "../Stores/Redux/MainStore";
import PictureService from "../Services/PictureService";



const ProductViewService = () => {
    const dispatch = useDispatch();

    const productService = new ProductService();
    const pictureService = new PictureService();

    const SearchAllProduct = async () => {
        try {

            let list = await productService.SearchAllProduct();
            dispatch({ type: "setProductListModel", payload: list });
            
        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }
    const SearchAllProductWithPicture = async () => {
        try {

            let list = await productService.SearchAllProduct();
            
            
            for (let item of list) {
                let listPic = await productService.getPicture(item.id);
                if (listPic && listPic.length) {
                    item.url="http://shop.devsharp.ir/api/Picture/"+listPic[0].pictureID;
                }
            }

           
            dispatch({ type: "setProductListModel", payload: list });
        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }

    const SearchProducts = async () => {
        const { productFilterModel } = MainStore.getState().product;

        try {
            let list = await productService.searchProducts(productFilterModel);
            dispatch({ type: "setProductListModel", payload: list });
            console.log(list);

        }
        catch (err) {
            ErrorMessage(err.message);
        }
    }
    const RegisterProduct = async () => {

        const { productModel } = MainStore.getState().product;

        try {
            if (productModel.id === 0) {
                let product = await productService.registerProduct(productModel)

                productModel.id = product.id;
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
            dispatch({
                type: "setProductModel", payload: {
                    id: product.id, publishDate: product.localPublishDate,
                    price: product.price, sku: product.sku, productName: product.productName, stockQuantity: product.stockQuantity
                }
            })

        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }
    const NewProduct = async () => {
        dispatch({ type: "newProductModel" })

    }
    const SelectImage = (file) => {
        dispatch({ type: "setPictureModel", payload: file })

    }
    const RegistrProductPicture = async () => {
        const { pictureModel, pictureProductModel, productModel } = MainStore.getState().product
        try {
            let pictureID = await pictureService.registerPicture(pictureModel)

            pictureProductModel.pictureID = pictureID;
            pictureProductModel.productID = productModel.id
            await productService.registerProductPicture(pictureProductModel);
            await GetProductPicture();


            SuccessMessage();


        }
        catch (err) {
            ErrorMessage(err.message)

        }

    }
    const GetProductPicture = async () => {
        const { productModel } = MainStore.getState().product
        let list = await productService.getPicture(productModel.id);
        dispatch({ type: "setpictureProductListModel", payload: list })

    }
    const RegisterProductCategory = async () => {
        const { productCategoryModel, productModel } = MainStore.getState().product

        try {
            productCategoryModel.productID = productModel.id;
            await productService.registerCategoryProduct(productCategoryModel)


        }
        catch (err) {
            ErrorMessage(err.message)

        }

    }
    const GetProductCategories = async () => {
        const { productModel } = MainStore.getState().product
        try {
            let list = await productService.GetProductCategories(productModel.id)
            dispatch({ type: "setproductCategoriesListModel", payload: list })

        }
        catch (err) {
            ErrorMessage(err.message)

        }
    }

    return {
        SearchAllProduct, SearchProducts, RegisterProduct,
        FindProduct, NewProduct, SelectImage, RegistrProductPicture, GetProductPicture
        , RegisterProductCategory, GetProductCategories,SearchAllProductWithPicture
    }


}
export default ProductViewService;