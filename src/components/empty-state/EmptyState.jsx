// Module dependencies
import React from 'react';

/**
 * EmptyState
 */
class EmptyState extends React.Component {
    render() {
        // empty advices
        let advices;
        if (this.props.message.advices) {
            advices = this.props.message.advices.map((str, index) => <li key={ index }>{ str }</li>)

            // advices list
            advices = <ul>{ advices }</ul>
        }

        return (
            <div className="empty-state">
                <h1>{ this.props.message.title }</h1>
                { advices }
            </div>
        )
    }
}

export default EmptyState;
