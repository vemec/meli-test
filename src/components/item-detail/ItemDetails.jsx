// Module dependencies
import React from 'react'

// components
import Breadcrumb from '../categories/Breadcrumb.jsx'

/**
 * ItemDetails
 */
class ItemDetails extends React.Component {

    render() {

        console.log(this.props)

        return (
            <div>
                <div className="item-details-container base-container">
                    <div className="item-top-data">
                        <div className="item-image">
                            <figure>
                                <img src={ this.props.product.picture } alt={ this.props.product.title } />
                            </figure>
                        </div>
                        <div className="item-short-desc">
                            <div className="item-info">{ this.props.product.condition } - { this.props.product.sold_quantity } Vendidos</div>
                            <header className="item-title"><h1>{ this.props.product.title }</h1></header>
                            <div className="item-price">
                                
                            </div>
                            <div className="item-pri-action">
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="item-description">
                        <h2>Descripción del producto</h2>
                        <div className="item-description-text">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemDetails