// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { parse } from 'qs'

import { searchItems } from '../../redux/actions/search'

const getSearchString = () => {
    const searchString = window.location.search.slice(1)
    return parse(searchString).search || ''
}

const mapStateToProps = () => ({
    query: getSearchString()
})

const mapDispatchToProps = dispatch => ({
    onSearch: (query, history) => {
        dispatch(searchItems(query, history))
    }
})

/**
 * SearchForm
 */
class SearchForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            placeholder: 'Nunca dejes de buscar',
            query: this.props.query
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.query !== this.props.query) {
            this.setState({
                query: nextProps.query
            })
        }
    }

    render() {
        return (
            <form className="search" action="" role="search">
                <input
                    aria-label={ this.state.placeholder }
                    placeholder={ this.state.placeholder }
                    type="text"
                    className="search-input"
                    name="search"
                    autoComplete="off"
                    onChange={ this.handleChange }
                    onKeyPress={ this.handleSubmit }
                    value={ this.state.query }
                />
                <button onClick={ (event) => this.handleClick(event) }  role="button" aria-label="Buscar" type="submit" className="search-btn">
                    <i className="search-icon"><span>Buscar</span></i>
                </button>
            </form>
        )
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        })
    }
    
    handleSubmit(event) {
        if (event.key == 'Enter') {
            event.preventDefault()
            this.props.onSearch(this.state.query, this.props.history)
        }
    }

    handleClick(event) {
        event.preventDefault()
        if(this.state.query) {
            this.props.onSearch(this.state.query, this.props.history)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm))
