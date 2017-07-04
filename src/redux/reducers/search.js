// import product actions
import { SAVE_ITEMS, LOADING_ITEMS, LOADING_ERROR, LOADING_STATUS } from '../actions/search'

// export
module.exports = (state = [], action) => {
    switch (action.type) {
        case LOADING_ITEMS:
            return Object.assign({}, state, {
                status: LOADING_STATUS.loading,
                query: action.query
            })

        case SAVE_ITEMS:
            return Object.assign({}, state, {
                status: LOADING_STATUS.success,
                items: action.items
            })

        case LOADING_ERROR:
            return Object.assign({}, state, {
                status: LOADING_STATUS.error,
                items: []
            })

        default:
            return state
    }
}
