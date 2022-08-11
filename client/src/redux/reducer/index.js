const initialState = {
    videogames: [],
    backup: [],
    filtered: [],
    details: {},
    genres: [],
}

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                backup: action.payload,
                filtered: action.payload
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'GET_BY_NAME':
            if (action.value === 'name') {
                return {...state, backup: action.payload, filtered: action.payload}
            }
            else {
                return {...state, backup: state.videogames, filtered: state.videogames}
            }
        case 'FILTER_BY':
            if (action.payload === 'default') {
                return {...state, filtered: state.backup}
            }
            if (action.payload === 'database') {
                return {...state, filtered: state.backup.filter((v) => v.createdInDb)}
            }
            if (action.payload === 'api') {
                return {...state, filtered: state.backup.filter((v) => !v.createdInDb)}
            }
            else {
                return {...state, filtered: state.backup.filter((v) => v.genres.find((g) => g === action.payload))}
            }
        case 'ORDER_BY':
            if (action.payload === 'az') {
                return {...state, filtered: [...state.filtered].sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    return 0
                })}}
            if (action.payload === 'za') {
                return {...state, filtered: [...state.filtered].sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    return 0
                })}}
            if (action.payload === 'asc') {
                return {...state, filtered: [...state.filtered].sort((a, b) => b.rating - a.rating)}
            }
            if (action.payload === 'desc') {
                return {...state, filtered: [...state.filtered].sort((a, b) => a.rating - b.rating)}
            }
            else {
                return {...state, filtered: state.backup}
            }
        default:
            return state;
    }
}
