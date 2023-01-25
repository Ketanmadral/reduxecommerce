import * as cartActions from "./cart.actions";
export const cartFeatureKey = "cartitems";

let initialState = {
    cart: []

}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case cartActions.ADD_TO_CART:
            let inCart = state.cart.some((product) => product.id === payload.id);
            if (inCart) {
                return alert("The product already exists in the cart")
            } else {
                return {
                    cart: [...state.cart, payload]
                }
            }


        case cartActions.CLEAR_CART:
            return {

                cart: []
            }
        case cartActions.DELETE_CART_ITEM:
            return {
                cart: [...state.cart.slice(0, payload), ...state.cart.slice(payload + 1)]

                // cart: state.cart.splice(payload, 1),
                // cart: [...state.cart]
            }
        case cartActions.INC_QTY:
            return {

                cart: state.cart.map((product, index) => {
                    if (product.id === payload.id) {
                        product.quantity = payload.quantity + 1;
                        product.total_qty_price = (payload.price * payload.quantity).toFixed(2);
                    }
                    return product;
                })

            }
        case cartActions.DEC_QTY:
            return {

                cart: state.cart.map((product, index) => {
                    if (product.id === payload.id) {
                        product.quantity = payload.quantity > 1 ? payload.quantity - 1 : 1;
                        product.total_qty_price = (payload.price * payload.quantity).toFixed(2);
                    }
                    return product;
                })

            }


        default: return state
    }
}

