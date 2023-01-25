import axios from "axios";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";



export const fetchProducts = () => {
    return async (dispatch) => {

        dispatch({ type: FETCH_PRODUCT_REQUEST })
        try {
            let dataURL = "https://gist.githubusercontent.com/Ketanmadral/e25823fc2a01a731833e71957cd2e3d1/raw/0d6229e7aa373c1c58d409cebdfec98fea9f2f24/db.json";
            let response = await axios.get(dataURL);
            
            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error })
        }
    }
}


export const searchProducts = (product) => {
    return {
        type: SEARCH_PRODUCT,
        payload: product
    }
}






