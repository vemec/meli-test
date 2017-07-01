// Module dependencies
import React from 'react';

/**
 * EmptyStateItemList
 */
class EmptyStateItemList extends React.Component {
    render() {
        return (
            <li className="result-item">
                <div className="result-item-container">
                    <div className="result-item-image">
                        <div className="pulse empty-state-image"></div>
                    </div>
                    <div className="result-item-info">
                        <div className="result-item-location">
                            <div className="pulse empty-state-text--location"></div>
                        </div>
                        <div className="result-item-price">
                            <div className="pulse empty-state-text--price"></div>
                        </div>
                        <h2 className="result-item-title">
                            <div className="pulse empty-state-text--title"></div>
                        </h2>
                    </div>
                </div>
            </li>
        )
    }
}

export default EmptyStateItemList
