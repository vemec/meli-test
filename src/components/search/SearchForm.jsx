// Module dependencies
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { parse } from 'qs'

import actions from '../../redux/actions';

const getQueryString = () => {
    const searchString = window.location.search.slice(1);
    return parse(searchString).search || '';
};

const mapStateToProps = () => ({
    query: getQueryString(),
});

const mapDispatchToProps = dispatch => ({
    onSearch: (query) => {
        dispatch(actions.searchItems(query));
    },
});

/**
 * SearchForm
 */
class SearchForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            placeholder: 'Nunca dejes de buscar',
            query: this.props.query,
        }

        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.query !== this.props.query) {
            this.setState({
                query: nextProps.query
            });
        }
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
                    onChange={this.onInput}
                    onKeyPress={this.onSubmit}
                    value={ this.state.query }
                />
                <button role="button" aria-label="Buscar" type="submit" className="search-btn" onClick={ (e) => this.submitQuery(e) }>
                    <i className="search-icon"><span>Buscar</span></i>
                </button>
            </form>
        )
    }

    onInput(e) {
        this.setState({
            query: e.target.value
        });
    }

    onSubmit(e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            this.props.onSearch(this.state.query);
        }
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchForm)
);
