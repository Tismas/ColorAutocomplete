import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.string.isRequired,
    suggestions: PropTypes.array.isRequired,
    
    onChange: PropTypes.func.isRequired,
    onSuggestionHover: PropTypes.func,
    onSuggestionLeaveHover: PropTypes.func
};


class AutoSuggest extends Component {
    constructor() {
        super();
        this.state = {
            currentSuggestions: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSuggestionLeaveHover = this.onSuggestionLeaveHover.bind(this);
        this.compareSuggestions = this.compareSuggestions.bind(this);
    }

    onSuggestionHover(color) {
        if(this.props.onSuggestionHover)
            this.props.onSuggestionHover(color);
    }

    onSuggestionLeaveHover() {
        if(this.props.onSuggestionLeaveHover)
            this.props.onSuggestionLeaveHover();
    }

    onSuggestionClick(suggestion) {
        this.props.onChange(suggestion.name);
        if(this.props.onSuggestionHover)
            this.props.onSuggestionHover(suggestion.hex);
        this.setState({ currentSuggestions: [] });
    }

    compareSuggestions(sugA, sugB) {
        const nameA = sugA.name;
        const nameB = sugB.name;
        if(nameA.length > nameB.length)
            return 1;
        else if(nameA.length < nameB.length)
            return -1;
        else {
            let indexA = nameA.indexOf(this.state.value);
            let indexB = nameB.indexOf(this.state.value);
            if(indexA > indexB)
                return 1;
            if(indexA < indexB)
                return -1;
            else
                return 0;
        }
    }

    onChange(e) {
        const searchValue = e.target.value;
        this.props.onChange(searchValue);

        if (searchValue.length >= 2) {
            const suggestions = this.props.suggestions
                .filter(suggestion => suggestion.name.includes(searchValue))
                .sort(this.compareSuggestions)
                .slice(0, 10);
            this.setState({ currentSuggestions: suggestions });
        }
        else if (this.state.currentSuggestions.length > 0) {
            this.setState({ currentSuggestions: [] });
        }
    }

    render() {
        const isThereSuggestion = this.state.currentSuggestions.length > 0;
        return (
            <div className="autosuggest-wrapper">
                <input
                    className={`autosuggest-input ${isThereSuggestion ? 'no-bottom-border-radius' : ''}`}
                    value={this.props.value}
                    onChange={this.onChange}
                />
                {isThereSuggestion ?
                    <div className="autosuggest-suggestions-container">
                        {this.state.currentSuggestions.map((suggestion, i) =>
                            <div
                                key={i}
                                className="autosuggest-suggestion"
                                onClick={this.onSuggestionClick.bind(this, suggestion)}
                                onMouseEnter={this.onSuggestionHover.bind(this, suggestion.hex)}
                                onMouseLeave={this.onSuggestionLeaveHover}
                            >
                                {[
                                    <span key="before">{suggestion.name.substr(0, suggestion.name.indexOf(this.props.value))}</span>,
                                    <b key="bolded">{suggestion.name.substr(suggestion.name.indexOf(this.props.value), this.props.value.length)}</b>,
                                    <span key="after">{suggestion.name.substr(suggestion.name.indexOf(this.props.value) + this.props.value.length)}</span>
                                ]}
                            </div>
                        )}
                    </div>
                    : null}
            </div>
        );
    }
}


AutoSuggest.propTypes = propTypes;


export default AutoSuggest;
