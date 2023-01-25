import * as productsActions from "./products.actions";

export const productsFeatureKey = "productslist";

const initialState = {
    loading: false,
    products: [],
    errorMessage: "",
    searchTerm: ""
}

export const reducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case productsActions.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case productsActions.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                products: payload
            }
        case productsActions.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                errorMessage: payload
            }
         case productsActions.SEARCH_PRODUCT  :
            return {
                ...state,
                searchTerm: payload
            }   
         default : return state   
    }
}