// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { getProduct, LOADING_STATUS } from '../../redux/actions/product'

// components
import EmptyState from '../empty-state/EmptyState.jsx'
import EmptyStateItemDetails from '../empty-state/EmptyStateItemDetails.jsx'
import ItemDetails from './ItemDetails.jsx'
import Breadcrumb from '../categories/Breadcrumb.jsx'

// get messages
var msg_obj = require('../../toolbox/messages')

const mapStateToProps = ({ product: { item, status }, nextProps }) => {
    return ({
        item,
        status
    })
}

const mapDispatchToProps = dispatch => ({ })

/**
 * ItemDetailsContainer
 */
class ItemDetailsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let content = <div></div>
        if (this.props.status === LOADING_STATUS.loading) {
            content = <EmptyStateItemDetails />
        } else if (this.props.status === LOADING_STATUS.error) {
            content = <EmptyState message={ msg_obj('error') } />
        } else if (this.props.item) {
            content =
                <div>
                    <Breadcrumb categories={ 1 } />
                    <ItemDetails product={ this.props.item } />
                </div>
        } else if (this.props.item.length === 0) {
            content = <EmptyState message={ msg_obj('product_not_found') } />
        }

        // return
        return content;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetailsContainer))
