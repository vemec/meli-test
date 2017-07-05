// Module dependencies
import React from 'react'
import { Link } from  'react-router-dom'

// action
import { getProduct } from '../../redux/actions/product'

/**
 * SearchResultItem
 */
class SearchResultItem extends React.Component {
    render() {

        // format price
        let price = this.props.product.price.amount+''
        price = price.split('.')

        // item price
        let price_data =
            <span>
                {'$ ' + Number.parseInt(price[0]).toLocaleString() }<sup>{ price[1] ? price[1] : '00' }</sup>
            </span>

        // get free_shipping_icon icon
        let free_shipping_icon;
        if (this.props.product.free_shipping) {
            free_shipping_icon = <div className="result-item-shipping" title="Envío gratis a todo el país">&nbsp;</div>
        }

        return (
            <li className="result-item">
                <div className="result-item-container">
                    <div className="result-item-image">
                        <Link to={ '/items/'+this.props.product.id } >
                            <figure>
                                <img src={ this.props.product.picture } alt={ this.props.product.title } />
                            </figure>
                        </Link>
                    </div>
                    <div className="result-item-info">
                        <div className="result-item-location">{ this.props.product.state}</div>
                        <div className="result-item-price">
                            { price_data }
                            { free_shipping_icon }
                        </div>
                        <h2 className="result-item-title">
                            <Link to={ '/items/'+this.props.product.id } >
                                { this.props.product.title }
                            </Link>
                        </h2>
                    </div>
                </div>
            </li>
        )
    }
}

export default SearchResultItem
