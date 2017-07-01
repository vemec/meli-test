import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// import routes
import routes from './routes'

// import normalize.css and custom css
import 'normalize.css'
import './scss/index.scss'

// create store
let store = createStore(
    applyMiddleware(thunk)
)

render(
    <Provider store={ store }>
        { routes }
    </Provider>,
    document.getElementById('app')
);
