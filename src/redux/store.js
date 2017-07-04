// Module dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

// initial store
import initialStore from './initialStore'
import product from './reducers/product'
import search from './reducers/search'

// export
export function initStore() {

    // combine...
    const reducers = combineReducers({
        search,
        product
    })

    // create store
    const store = createStore(
        reducers,
        initialStore,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

    // return store
    return store;
}
