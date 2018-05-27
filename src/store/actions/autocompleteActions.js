import axios from 'axios';

export function fetchColors () {
    return {
        type:"FETCH_COLORS",
        payload: axios.get('http://www.mocky.io/v2/5a37a7403200000f10eb6a2d')
    }
}