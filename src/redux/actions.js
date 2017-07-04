// history
import history from '../history'

const SAVE_ITEMS = 'save'
const LOADING_ITEMS = 'loading'
const LOADING_ERROR = 'error'

const LOADING_STATUS = {
    error: 2,
    success: 1,
    loading: 3
}

const saveItems = (items) => ({
    items,
    type: SAVE_ITEMS
})

const loadingItems = (query) => ({
    query,
    type: LOADING_ITEMS
})

const loadingError = (error) => ({
    error,
    type: LOADING_ERROR
})

const searchItems = (query, history) => (dispatch, getState) => {
    query = query ? query.trim() : query

    if (history && !query) {
		const { pathname, search } = history.location
		const alreadyInRootLocation = pathname === '/' && search === ''
		
		return alreadyInRootLocation ? false : history.push('/')
	}

    if (history) {
		history.push('/items?search=' + query)
	}

    dispatch(loadingItems(query))

    return Promise.resolve()
        .then(() => {
            return fetch(`/api/items?q=${query}`)
        })
        .then((response) => {
            return response.json()
        })
        .then((products) => {
            dispatch(saveItems(products.items))
            return products
        })
        .catch((error) => {
            loadingError(error)
            return error
        })
}

module.exports = {
    SAVE_ITEMS,
    LOADING_ITEMS,
    LOADING_ERROR,
    LOADING_STATUS,
    saveItems,
    loadingItems,
    loadingError,
    searchItems
}
