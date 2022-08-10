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
            const genres = state.filterVideogames;
            const genreFilter = action.payload === 'all' ? genres : genres.filter((v) => v.genres.find((g) => g === action.payload));
            return {
                ...state,
                videogames: genreFilter
            }
        case 'FILTER_CREATED':
            let creation = state.filterVideogames;
            const creationFilter = action.payload === 'database' ? creation.filter((v) => v.createdInDb) : creation.filter((v) => !v.createdInDb);
            return {
                ...state,
                videogames: action.payload === 'all' ? creation : creationFilter
            }
        case 'FILTER_ALPHABETIC':
            const alphabetic = state.filterVideogames;
            let alphabeticFilter = action.payload === 'asc' ? alphabetic.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) : alphabetic.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                    return 0;
            });
            console.log(alphabeticFilter);
            return {
                ...state,
                videogames: action.payload === 'clear' ? alphabetic : alphabeticFilter
            }
        default:
            return state;
    }
}
