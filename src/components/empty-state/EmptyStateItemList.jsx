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
                        <div className="pulse empty-state-block empty-state--limage"></div>
                    </div>
                    <div className="result-item-info">
                        <div className="result-item-location">
                            <div className="pulse empty-state-block empty-state--location"></div>
                        </div>
                        <div className="result-item-price">
                            <div className="pulse empty-state-block empty-state--lprice"></div>
                        </div>
                        <h2 className="result-item-title">
                            <div className="pulse empty-state-block empty-state--ltitle"></div>
                        </h2>
                    </div>
                </div>
            </li>
        )
    }
}

export default EmptyStateItemList
