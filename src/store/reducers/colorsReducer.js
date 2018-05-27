const initialState = {
    searchValue: '',
    colorPreview: false,
    overlayColor: '#fff',
}
initialState.background = initialState.defaultBackground;

const colorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR_SEARCH_INPUT':
            return {...state, searchValue: action.payload}
        case 'SHOW_COLOR_PREVIEW':
            return {...state, overlayColor: action.payload, colorPreview: true}
        case 'HIDE_COLOR_PREVIEW':
            return {...state, colorPreview: false}
        case 'SUBMIT_COLOR':
            return {...state, colorPreview: false}
    }
    return state;
};

export default colorsReducer;