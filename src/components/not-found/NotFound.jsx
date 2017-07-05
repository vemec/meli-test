// Module dependencies
import React from 'react';

// components
import EmptyState from '../empty-state/EmptyState.jsx'

// get messages
var msg_obj = require('../../toolbox/messages')

/**
 * App Layout
 */
class Layout extends React.Component {
    render() {
        return (
            <EmptyState message={ msg_obj('page_not_found') } />
        )
    }
}

export default Layout;
