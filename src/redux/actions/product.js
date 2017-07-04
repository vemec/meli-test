// actions types
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_ERROR = 'PRODUCT_ERROR'

// actions creators
export function productRequest() {
    return {
        type: PRODUCT_REQUEST
    }
}

export function productSuccess(product) {
    return {
        type: PRODUCT_SUCCESS,
        product: product
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

    // return
    return Promise.resolve()
        .then(() => {
            return fetch('/items/'+id)
        })
        .then((response) => {
            return response.json()
        })
        .then((product) => {
            dispatch(productSuccess(product.items))
            return product
        })
        .catch((error) => {
            productError(error)
            return error
        })
}
