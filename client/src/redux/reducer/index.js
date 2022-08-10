const initialState = {
    videogames: [],
    genres: [],
    filterVideogames: [],
}

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                filterVideogames: action.payload,
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'FILTER_GENRES':
            const allVideogames = state.filterVideogames;
            const genreFilter = allVideogames.filter((v) => v.genres.find((g) => g === action.payload));
            return {
                ...state,
                videogames: genreFilter
            }
        default:
            return state;
    }
}
