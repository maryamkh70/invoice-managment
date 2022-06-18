import { Get, Post, Put } from "../Adapters/Api";

export const getAllProductListAction = { type: "get", url: "Product" };
export const getSearchProductAction = { type: "get", url: "Product/Search" };
export const registerProducAction = { type: "post", url: "Product" };
export const updateProducAction = { type: "put", url: "Product" };
export const findProducAction = { type: "= get", url: "Product/find" };
export const registerProductPictureAction = { url: "Product/AddProductToPicture", type: "post" };
export const registerProductCategoryAction = { type: "post", url: "AddCategoryToProduct" };

export const getAllProductPictureListAction = { type: "get", url: "Product/Picture" };
export const getProductCategoriesListAction = { type: "get", url: "Product/Categories" }






export default class ProductService {
    SearchAllProduct() {
        return Get(getAllProductListAction)

    }
    searchProducts(productFilter) {
        return Get(getSearchProductAction, productFilter)
    }
    registerProduct(product) {
        return Post(registerProducAction, product)
    }
    updateProduct(product) {
        return Put(updateProducAction, product)
    }
    findProduct(id) {
        return Get({ url: findProducAction.url + "/" + id })

    }
    registerProductPicture(productPictrue) {
        return Post(registerProductPictureAction, productPictrue);
    }
    getPicture(id) {
        return Get({ url: getAllProductPictureListAction.url + "/" + id })

    }
    registerProductCategotry(CategoryProduct) {
        return Post(registerProductCategoryAction, CategoryProduct)
    }
    getCategories(id) {
        return Get({ url: getProductCategoriesListAction.url + "/" + id })
    }





}
