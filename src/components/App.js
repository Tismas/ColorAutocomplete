import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchColors } from '../store/actions/autocompleteActions';
import { changeInput, showPreview, hidePreview, submitColor } from '../store/actions/colorsActions'

import AutoSuggest from './AutoSuggest';

@connect(store => ({
    suggestions: store.autocomplete.colors,
    autocompleteFetched: store.autocomplete.fetched,
    autocompleteFetching: store.autocomplete.fetching,
    autocompleteFetchError: store.autocomplete.error,
    ...store.colors
}))
class App extends Component {
    constructor() {
        super();
        this.onColorInputChange = this.onColorInputChange.bind(this);
        this.showPreview = this.showPreview.bind(this);
        this.hidePreview = this.hidePreview.bind(this);
        this.submitColor = this.submitColor.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(fetchColors());
    }

    onColorInputChange(value) {
        this.props.dispatch(changeInput( value ));
    }

    showPreview(overlayColor) {
        this.props.dispatch(showPreview( overlayColor ));
    }

    hidePreview() {
        this.props.dispatch(hidePreview());
    }

    submitColor() {
        this.props.dispatch(submitColor( this.props.overlayColor ));
    }

    render() {
        return (
            <div className="bg">
                <div
                    className="bg-overlay"
                    style={{
                        '--background-overlay-color': this.props.overlayColor,
                        opacity: this.props.colorPreview ? 0.5 : 0.8
                    }}
                /> 
                <div className="input-container">
                    <AutoSuggest
                        value={this.props.searchValue}
                        suggestions={this.props.suggestions}

                        onChange={this.onColorInputChange}
                        onSuggestionHover={this.showPreview}
                        onSuggestionLeaveHover={this.hidePreview}
                    />
                    <button className="accept-button" onClick={this.submitColor}> Accept </button>
                </div>
            </div>
        );
    }
}

export default App;
