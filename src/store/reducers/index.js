import { combineReducers } from 'redux';

import colorAutocompleteReducer from './colorAutocompleteReducer';
import colorsReducer from './colorsReducer';

export default combineReducers({
    autocomplete: colorAutocompleteReducer,
    colors: colorsReducer
});
