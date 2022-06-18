import {  Post} from "../Adapters/Api";

export const getAllProductListAction = { type: "get", url: "Product" };

export const registerPictureAction = { type: "post", url: "Picture" };






export default class PictureService 
{
   registerPicture(picture)
    {
        return Post(registerPictureAction,picture)

    }

}