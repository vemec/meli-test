// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { LOADING_STATUS } from '../redux/actions/search'

// components
import EmptyState from './empty-state/EmptyState.jsx'
import EmptyStateItem from './empty-state/EmptyStateItem.jsx'
import SearchResult from './search/SearchResult.jsx'
import Breadcrumb from './categories/Breadcrumb.jsx'

// get messages
var msg_obj = require('../messages')

const mapStateToProps = ({ search: { items, status } }, nextProps) => {
    return ({
        items,
        status,
        showSearchHints: !window.location.search.length
    })
}

const mapDispatchToProps = dispatch => ({
})

/**
 * SearchResultsContainer
 */
class SearchResultsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content = null;

        if (this.props.showSearchHints) {
            content = <EmptyState message={ msg_obj('home') } />
        } else if (this.props.status === LOADING_STATUS.loading) {
            content = <EmptyStateItem />
        } else if (this.props.status === LOADING_STATUS.error) {
            content = <EmptyState message={ msg_obj('error') } />
        } else if (this.props.items.items) {
            content =
                <div>
                    <Breadcrumb categories={ this.props.items.categories } />
                    <SearchResult products={ this.props.items.items } />
                </div>
        } else  {
            content = <EmptyState message={ msg_obj('product_not_found') } />
        }

        // return
        return content;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer))
