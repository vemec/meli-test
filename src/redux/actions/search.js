// get request fetch function
import { promiseFetch } from './promise.fetch'

// history
import history from '../../history'

// actions types
export const SAVE_ITEMS = 'save'
export const LOADING_ITEMS = 'loading'
export const LOADING_ERROR = 'error'

export const LOADING_STATUS = {
    error: 2,
    success: 1,
    loading: 3
}

// actions creators
export function saveItems(items) {
    return {
        type: SAVE_ITEMS,
        items
    }
}

export function loadingItems(query) {
    return {
        type: LOADING_ITEMS,
        categories: query.categories,
        items: query.items
    }
}

export function  loadingError(error) {
    return {
        type: LOADING_ERROR,
        error
    }
}

// export
export function searchItems(query, history) {

    query = query ? query.trim() : query

    if (history && !query) {
        const { pathname, search } = history.location
        const alreadyInRootLocation = pathname === '/' && search === ''

        return alreadyInRootLocation ? false : history.push('/')
    }

    if (history) {
        history.push('/items?search=' + query)
    }

    return dispatch => {

        // disptch
        dispatch(loadingItems(query))

        // make request
        return promiseFetch(`/api/items?q=${query}`)
            .then(items => dispatch(
                saveItems(items)
            ))
            .catch(error => dispatch(
                loadingError(error)
            ))
    }
}
