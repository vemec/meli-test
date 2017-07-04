// Module dependencies
import React from 'react';
import { Link } from  'react-router-dom'

// components
import SearchForm from '../search/SearchForm.jsx';

/**
 * Header
 */
class Header extends React.Component {
    render() {
        return (
        <header role="banner" className="nav-header nav-header-ontop">
            <div className="wrap-header">
                <div className="nav-container">
                    <Link to="/" tabIndex="0" className="logo">Mercado Libre - Test</Link>
                    <SearchForm />
                </div>
            </div>
        </header>
        )
    }
}

export default Header;
