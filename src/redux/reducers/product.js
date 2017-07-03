// import product actions
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR } from '../actions/product'

// export
export function getProduct(state = [], action) {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return Object.assign({}, state, {
                item: {}
            })

        case PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                item: action.product
            })

        case PRODUCT_ERROR:
            return Object.assign({}, state, {
                item: action.error
            })

        default:
            return state
    }
}
