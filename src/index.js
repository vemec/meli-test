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
const getLocation = () => {
    if (window.location.search) {
        const searchString = window.location.search.slice(1);
        return {
            type: 'search',
            value: qs.parse(searchString).search || ''
        }

    } else if (window.location.pathname.split('/')[1] === 'items') {
        const productId = window.location.pathname.split('/')[2]
        return {
            type: 'product',
            value: productId
        }
    } else {
        return {
            type: null,
            value: ''
        }
    }
}

// handle back/next button
window.onpopstate = () => {

    let location = getLocation()
    if (location.type === 'search') {
        store.dispatch(searchItems(location.value))
    } else if (location.type === 'product') {
        store.dispatch(getProduct(location.value))
    }
}

// handle initial route with query string
const location = getLocation()
if (location.type === 'search') {
    store.dispatch(searchItems(location.value))
} else if (location.type === 'product') {
    store.dispatch(getProduct(location.value))
}

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('app')
)
