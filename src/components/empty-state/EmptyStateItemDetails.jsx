// Module dependencies
import React from 'react'

/**
 * EmptyStateItemDetails
 */
class EmptyStateItemDetails extends React.Component {

    render() {
        return (
            <div>
                <section className="breadcrumb">
                    <nav className="breadcrumb-nav">
                        <div className="breadcrumb-list">
                            <div className="pulse empty-state-block empty-state--breadcrumb"></div>
                        </div>
                    </nav>
                </section>
                <div className="item-details-container base-container">
                    <div className="item-top-data">
                        <div className="item-image">
                            <div className="pulse empty-state-block empty-state-image"></div>
                        </div>
                        <div className="item-short-desc">
                            <div className="item-info">
                                <div className="pulse empty-state-block empty-state--item-info"></div>
                            </div>
                            <header className="item-title">
                                <div className="pulse empty-state-block empty-state-ititle"></div>
                            </header>
                            <div className="item-price">
                                <div className="pulse empty-state-block empty-state--iprice"></div>
                            </div>
                        </div>
                    </div>
                    <div className="item-description">
                        <h2>Descripción del producto</h2>
                        <div className="item-description-text">
                            <div className="pulse empty-state-block empty-state--description"></div>
                            <div className="pulse empty-state-block empty-state--description-al"></div>
                            <div className="pulse empty-state-block empty-state--description-al2"></div>
                            <div className="pulse empty-state-block empty-state--description-al"></div>
                            <div className="pulse empty-state-block empty-state--description"></div>
                            <div className="pulse empty-state-block empty-state--description-al2"></div>
                            <div className="pulse empty-state-block empty-state--description-al"></div>
                            <div className="pulse empty-state-block empty-state--description-al2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmptyStateItemDetails