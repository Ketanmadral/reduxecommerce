import { combineReducers } from "redux";
import * as productsReducer from "./products/products.reducer";
import * as cartReducer from "./cart/cart.reducer";


export const rootReducer = combineReducers({
    [productsReducer.productsFeatureKey]: productsReducer.reducer,
    [cartReducer.cartFeatureKey]:cartReducer.reducer
})
