const colorAutocompleteReducer = (state = {
    fetching: false,
    fetched: false,
    error: null,
    colors: []
}, action) => {
    switch(action.type) {
        case 'FETCH_COLORS_PENDING':
            return {...state, fetching: true}
        case 'FETCH_COLORS_REJECTED':
            return {...state, fetching: false, error: action.payload}
        case 'FETCH_COLORS_FULFILLED':
            return {...state, fetching: false, fetched: true, colors: action.payload.data}
    }
    return state;
};

export default colorAutocompleteReducer;