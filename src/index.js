// Module dependencies
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import qs from 'qs';

// import routes
import routes from './routes'

// redux
import actions from './redux/actions'
import { initStore } from './redux/store'

// import normalize.css and custom css
import 'normalize.css'
import './scss/index.scss'

// Init store
const store = initStore()

// get query string from current window url
const getQueryString = () => {
	const searchString = window.location.search.slice(1);
	return qs.parse(searchString).search || ''
}

// handle back/next button
window.onpopstate = () => {
	store.dispatch(actions.searchItems(getQueryString()))
}

// handle initial route with query string
const query = getQueryString()

if (query) {
	store.dispatch(actions.searchItems(getQueryString()))
}

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('app')
)
