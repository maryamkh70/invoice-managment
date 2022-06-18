import { getNowPersianDate } from "../../Utils/PersianDate";

const initialProductState = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "", isAvailable: false, FromPrice: 0, ToPrice: 0, FromPublishDate: getNowPersianDate(), ToPublishDate: "1500/01/01" },
    productModel: { id: 0, productName: "", sku: "", price: 0, publishDate: getNowPersianDate(), stockQuantity: 0 },
    pictureModel: { file: null },
    pictureProductModel: { productID: 0, pictureID: 0, displayOrder: 0 },
    pictureProductListModel: []
    , productCategoryModel: { parentID: 0, productID: 0 },
    productCategoriesListModel:[]
}

const ProductReucer = (state = initialProductState, action) => {



    switch (action.type) {
        case "setProductListModel":
            {
                return { ...state, productListModel: action.payload }

            }
        case "setProductModel":
            {
                return { ...state, productModel: action.payload }

            }
        case "newProductModel":
            {
                return { ...state, productModel: { id: 0, productName: "", sku: "", price: 0, publishDate: getNowPersianDate(), stockQuantity: 0 } }

            }
        case "setPictureModel":
            {
                return { ...state, pictureModel: { file: action.payload } }

            }
        case "setPictureProductModel":
            {
                return { ...state, pictureProductModel: { productID: 0, pictureID: 0, displayOrder: 0 } }

            }
        case "setpictureProductListModel":
            {
                return { ...state, pictureProductListModel: action.payload.map((value)=>{
                    return{...value,url:"http://shop.devsharp.ir/api/Picture/"+value.pictureID}

                }) }

            }
            case "setproductCategoriesListModel":
                {
                    return {...state,productCategoriesListModel:action.payload}
                }




        default:
            return state;

    }

}

export default ProductReucer;