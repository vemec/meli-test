// Module dependencies
import React from 'react'
import { connect } from 'react-redux'

// components
import Breadcrumb from '../categories/Breadcrumb.jsx'

/**
 * ItemDetails
 */
class ItemDetails extends React.Component {

    render() {
        return (
            <div>
                <Breadcrumb categories={1} />
                <div className="item-details-container base-container">
                    <div className="item-top-data">
                        <div className="item-image">
                            <figure>
                                <img src="https://placeholdit.co//i/680x560" alt="" />
                            </figure>
                        </div>
                        <div className="item-short-desc">
                            <div className="item-info">Nuevo - 12 Vendidos</div>
                            <header className="item-title"><h1>Felt IA 14</h1></header>
                            <div className="item-price">$ 45.000</div>
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