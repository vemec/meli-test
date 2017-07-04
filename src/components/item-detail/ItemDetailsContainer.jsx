// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { getProduct, LOADING_STATUS } from '../../redux/actions/product'

// components
import EmptyState from '../empty-state/EmptyState.jsx'
import EmptyStateItem from '../empty-state/EmptyStateItem.jsx'
import ItemDetails from './ItemDetails.jsx'
import Breadcrumb from '../categories/Breadcrumb.jsx'

// get messages
var msg_obj = require('../../messages')

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

        console.log(this.props.status)
        console.log(this.props)

        if (this.props.status === LOADING_STATUS.loading) {
            console.log('loading')
            content = <EmptyStateItem />
        } else if (this.props.status === LOADING_STATUS.error) {
            console.log('error')
            content = <EmptyState message={ msg_obj('error') } />
        } else if (this.props.item) {
            console.log('listado')
            content =
                <div>
                    <Breadcrumb categories={ 1 } />
                    <ItemDetails product={ this.props.item } />
                </div>
        } else if (this.props.item.length === 0) {
            console.log('no hay nada')
            content = <EmptyState message={ msg_obj('product_not_found') } />
        }

        // return
        return content;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetailsContainer))
