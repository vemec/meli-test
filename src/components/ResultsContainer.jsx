// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { parse } from 'qs'

// actions
import actions from '../redux/actions'

// components
import EmptyState from './empty-state/EmptyState.jsx'
import EmptyStateItem from './empty-state/EmptyStateItem.jsx'
import SearchResult from './search/SearchResult.jsx'

// get messages
var msg_obj = require('../messages')

const mapStateToProps = ({ search: { items, status } }, nextProps) => {
    return ({
        items,
        status,
        // XXX: the parsing of the search location should be improved
        showSearchHints: !window.location.search.length,
    });
};

const mapDispatchToProps = dispatch => ({
});

/**
 * SearchForm
 */
class ResultsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content = null;

        if (this.props.showSearchHints) {
            content = <EmptyState message={ msg_obj('home') } />
        } else if (this.props.status === actions.LOADING_STATUS.loading) {
            content = <EmptyStateItem />
        } else if (this.props.status === actions.LOADING_STATUS.error) {
            content = <EmptyState message={ msg_obj('error') } />
        } else if (this.props.items.length) {
            content = <SearchResult products={ this.props.items }/>;
        } else {
            content = <EmptyState message={ msg_obj('product_not_found') } />
        }

        // return
        return content;
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ResultsContainer)
);
