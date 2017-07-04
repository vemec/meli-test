// import product actions
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR, LOADING_STATUS } from '../actions/product'

// export
module.exports = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return Object.assign({}, state, {
                status: LOADING_STATUS.loading,
                item: {}
            })

        case PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                status: LOADING_STATUS.success,
                item: action.item.item
            })

        case PRODUCT_ERROR:
            return Object.assign({}, state, {
                status: LOADING_STATUS.error,
                item: []
            })

        default:
            return state
    }
}
