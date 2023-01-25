export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const INC_QTY = "INC_QTY";
export const DEC_QTY = "DEC_QTY";
export const PLACE_ORDER = "PLACE_ORDER";



export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
       
    }
}


export const deleteCartItem = (id) => {
    return {
        type: DELETE_CART_ITEM,
        payload: id
    }
}

export const incQty = (product)=>{
    return{
        type : INC_QTY,
        payload: product
    }
}

export const decQty = (product)=>{
    return{
        type : DEC_QTY,
        payload: product
    }
}




