// import actions
import actions from './actions';

// export
module.exports = (state, action) => {
    let newState = state;

    if (action.type === actions.LOADING_ITEMS) {
        newState = Object.assign({}, state, {
            search: Object.assign({}, state.search, {
                query: action.query,
                status: actions.LOADING_STATUS.loading,
            }),
        });

    } else if (action.type === actions.SAVE_ITEMS) {
        newState = Object.assign({}, state, {
            search: Object.assign({}, state.search, {
                items: action.items,
                status: actions.LOADING_STATUS.success,
            }),
        });

    } else if (action.type === actions.LOADING_ERROR) {
        newState = Object.assign({}, state, {
            search: Object.assign({}, state.search, {
                items: [],
                status: actions.LOADING_STATUS.error,
            }),
        });
    }

    return newState;
};
