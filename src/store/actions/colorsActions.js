function correctColor(color) {
    if(color[0] != '#')
        color = `#${color}`;
    return color;
}

export function changeInput(value) {
    return {
        type: "CHANGE_COLOR_SEARCH_INPUT",
        payload: value
    }
}
export function showPreview(color) {
    return {
        type: "SHOW_COLOR_PREVIEW",
        payload: correctColor(color)
    }
}
export function hidePreview() {
    return {
        type: "HIDE_COLOR_PREVIEW"
    }
}
export function submitColor(color) {
    return {
        type: "SUBMIT_COLOR",
        payload: correctColor(color)
    }
}