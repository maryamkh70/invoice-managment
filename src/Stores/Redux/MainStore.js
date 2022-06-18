import { combineReducers, createStore } from "redux";
import CategoryReducer from "../Reducers/CateoryReducer";
import ProductReucer from "../Reducers/ProductReducer";


const reducers = combineReducers({ product: ProductReucer ,category:CategoryReducer})

const mainStore = createStore(reducers);

export default mainStore;