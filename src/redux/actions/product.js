// get request fetch function
import { promiseFetch } from './promise.fetch'

// actions types
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_ERROR = 'PRODUCT_ERROR'

export const LOADING_STATUS = {
    error: 2,
    success: 1,
    loading: 3
}

// actions creators
export function productRequest() {
    return {
        type: PRODUCT_REQUEST
    }
}

export function productSuccess(item) {
    return {
        type: PRODUCT_SUCCESS,
        item
    }
}

export function productError(error) {
    return {
        type: PRODUCT_ERROR,
        error
    }
}

// export
export function getProduct(id) {
    return dispatch => {

        // disptch
        dispatch(productRequest())

        // make request
        return promiseFetch('/api/items/'+id)
            .then(item => dispatch(
                productSuccess(item)
            ))
            .catch(error => dispatch(
                productError(error)
            ))
    }
}