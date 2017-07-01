// Module dependencies
import React from 'react'
import { Link } from  'react-router-dom'

/**
 * SearchResultItem
 */
class SearchResultItem extends React.Component {
    render() {

        // get free_shipping_icon icon
        let free_shipping_icon;
        if (this.props.product.free_shipping) {
            free_shipping_icon = <div className="result-item-shipping" title="Envío gratis a todo el país">&nbsp;</div>
        }

        return (
            <li className="result-item">
                <div className="result-item-container">
                    <div className="result-item-image">
                        <Link to={ '/items/'+this.props.product.id }>
                            <figure>
                                <img src={ this.props.product.picture } alt={ this.props.product.title } />
                            </figure>
                        </Link>
                    </div>
                    <div className="result-item-info">
                        <div className="result-item-location">{ this.props.product.state}</div>
                        <div className="result-item-price">
                            <span>{ this.props.product.price.currency } { Number(parseFloat(this.props.product.price.amount).toFixed(this.props.product.price.amount.decimals)).toLocaleString() } </span>
                            { free_shipping_icon }
                        </div>
                        <h2 className="result-item-title">
                            <Link to={ '/items/'+this.props.product.id }>
                                { this.props.product.title }
                            </Link>
                        </h2>
                    </div>
                </div>
            </li>
        )
    }
}

export default SearchResultItem;
