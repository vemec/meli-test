// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { parse } from 'qs'

/**
 * SearchForm
 */
class SearchForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            placeholder: 'Nunca dejes de buscar'
        }

        this.query = parse(this.props.location.search.substr(1))
    }

    render() {
        return (
            <form className="search" action="a" method="GET" role="search">
                <input
                    aria-label={ this.state.placeholder }
                    placeholder={ this.state.placeholder }
                    type="text"
                    className="search-input"
                    name="header-search"
                    autoComplete="off"
                    defaultValue={ this.query.search }
                    onKeyPress={ (e) => this.inputSearch(e) }
                    ref={ input => this.textInput = input }
                />
                <button role="button" aria-label="Buscar" type="submit" className="search-btn" onClick={ (e) => this.submitQuery(e) }>
                    <i className="search-icon"><span>Buscar</span></i>
                </button>
            </form>
        )
    }

    /**
    * submitQuery hace el search y cambia
    * la url con el termino buscado
    */
    submitQuery (e) {
        e.preventDefault();
        if (this.textInput.value) {
            this.props.history.push("/items?search="+this.textInput.value)
        }
        else {
            this.props.history.push("/")
        }
    }

    /**
    * inputSearch es un wrapper de submitQuery
    * solo que espera un "enter" del user
    * para realizar la busqueda
    */
    inputSearch(e) {
        if (e.key == 'Enter') {
            this.submitQuery(e);
        }
    }
}

export default withRouter(SearchForm)
