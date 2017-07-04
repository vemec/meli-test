// Module dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

// initial store
import initialStore from './initialStore'
import sserch_result from './reducer'
import product from './reducers/product'

// export
export function initStore() {

    // merge...
    // const reducers = combineReducers({
    //     sserch_result,
    //     product
    // })

    // create store
    const store = createStore(
        sserch_result,
        initialStore,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

    // return store
    return store;
}
