// Module dependencies
import React from 'react'

// components
import Header from './header/Header.jsx'
import SvgIcons from './icons/SvgIcons.jsx'

/**
 * App Layout
 */
class Layout extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <SvgIcons />
                <Header />
                <main role="main">
                    <div className="content wrap-content">
                        { this.props.children }
                    </div>
                </main>
            </div>
        )
    }
}

export default Layout;
