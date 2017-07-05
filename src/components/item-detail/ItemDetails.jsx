// Module dependencies
import React from 'react'
import ReactHtmlParser from 'react-html-parser';

// components
import Breadcrumb from '../categories/Breadcrumb.jsx'

/**
 * ItemDetails
 */
class ItemDetails extends React.Component {

    render() {

        // format price
        let price = this.props.product.price.amount+''
        price = price.split('.')

        // item price
        let price_data =
            <div className="item-price">
                $
                {' ' + Number.parseInt(price[0]).toLocaleString() }<sup>{ price[1] ? price[1] : '00' }</sup>
            </div>
        
        // Iten status
        let item_status = (this.props.product.condition === 'new' ? 'Nuevo' : 'Usado' )
        let item_info =
        <div className="item-info">
            { item_status } - { this.props.product.sold_quantity } Vendidos
        </div>

        // Item description
        let item_description
        if (this.props.product.description.plain_text) {
            item_description = <p>{ this.props.product.description.plain_text }</p>
        } else {
            item_description = ReactHtmlParser(this.props.product.description.text)
        }

        return (
            <div>
                <div className="item-details-container base-container">
                    <div className="item-top-data">
                        <div className="item-image">
                            <figure>
                                <img src={ this.props.product.picture } alt={ this.props.product.title } width="600" />
                            </figure>
                        </div>
                        <div className="item-short-desc">
                            { item_info }
                            <header className="item-title"><h1>{ this.props.product.title }</h1></header>
                            { price_data }
                            <div className="item-pri-action">
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="item-description">
                        <h2>Descripción del producto</h2>
                        <div className="item-description-text">
                            { item_description  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemDetails