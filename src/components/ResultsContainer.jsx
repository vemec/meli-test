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
 * ResultsContainer
 */
class ResultsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content = null;

        if (this.props.showSearchHints) {
            console.log('hint')
            content = <EmptyState message={ msg_obj('home') } />
        } else if (this.props.status === LOADING_STATUS.loading) {
            console.log('loading')
            content = <EmptyStateItem />
        } else if (this.props.status === LOADING_STATUS.error) {
            console.log('error')
            content = <EmptyState message={ msg_obj('error') } />
        } else if (this.props.items.length) {
            console.log('listado')
            content = <SearchResult products={ this.props.items } />
        } else if (this.props.items.length === 0) {
            console.log('no hay nada')
            content = <EmptyState message={ msg_obj('product_not_found') } />
        }

        // return
        return content;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsContainer))
