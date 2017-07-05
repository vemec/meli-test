// Module dependencies
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import qs from 'qs';

// import routes
import routes from './routes'

// redux
import { searchItems } from './redux/actions/search'
import { getProduct } from './redux/actions/product'
import { initStore } from './redux/store'

// import normalize.css and custom css
import 'normalize.css'
import './scss/index.scss'

// Init store
const store = initStore()

// get query string from current window url
const getSearchString = () => {
	const searchString = window.location.search.slice(1)
	return qs.parse(searchString).search || ''
}

// get Item from URL
const getItemIdFromUrl = () => {
    const productId = window.location.pathname.split('/')[2]
    return productId
}

// on history change
window.onpopstate = () => {
	if (initialItemsSearch) {
	    store.dispatch(searchItems(getSearchString()))
    } else if (initialItemInfo) {
        store.dispatch(getProduct(getItemIdFromUrl()))
    }
}

const query = getSearchString()
const initialItemsSearch = query && window.location.pathname === '/items'
const initialItemInfo = !window.location.search && window.location.pathname.split('/')[1] === 'items'

// dispach...
if (initialItemsSearch) {
	store.dispatch(searchItems(getSearchString()))
} else if (initialItemInfo) {
	store.dispatch(getProduct(getItemIdFromUrl()))
}

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('app')
)
