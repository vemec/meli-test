// Module dependencies
import React from 'react';

// components
import EmptyStateItemList from './EmptyStateItemList.jsx'

/**
 * EmptyState
 */
class EmptyState extends React.Component {
    render() {
        return (
            <div>
                <section className="breadcrumb">
                    <nav className="breadcrumb-nav">
                        <div className="breadcrumb-list">
                            <div className="pulse empty-state-block  empty-state--breadcrumb"></div>
                        </div>
                    </nav>
                </section>
                <div className="search-result-container base-container">
                    <ol>
                        <EmptyStateItemList />
                        <EmptyStateItemList />
                        <EmptyStateItemList />
                    </ol>
                </div>
            </div>
        )
    }
}

export default EmptyState;
