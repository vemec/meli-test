// Module dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// initial store
import initialStore from './initialStore'
import reducer from './reducer'

export function initStore() {

    // create store
    const store = createStore(
        reducer,
        initialStore,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

    // return store
    return store;
}
