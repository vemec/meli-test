// Module dependencies
import React from 'react'
import { Link } from  'react-router-dom'

/**
 * Breadcrumb
 */
class Breadcrumb extends React.Component {
    render() {

        // get categories
        let categories = <li></li>
        let start = <li><Link to="/">Inicio</Link></li>
        if (this.props.categories.length > 0) {
            categories = this.props.categories.map((str, index) =>
                <li key={ index }>
                    <span itemProp="title">{ str }</span>
                    <svg viewBox="0 0 18 18" role="presentation" className="breadcrumb-icon">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#breadcrumb-icon"></use>
                    </svg>
                </li>
            )

            // advices list
            categories = <ol>{ start } { categories }</ol>
        }

        return (
            <section className="breadcrumb">
                <nav className="breadcrumb-nav">
                    <div className="breadcrumb-list">{ categories }</div>
                </nav>
            </section>
        )
    }
}

export default Breadcrumb
