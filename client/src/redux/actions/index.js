import axios from 'axios';

export const getVideogames = () => {
    return async (dispatch) => {
        let data = (await axios.get('http://localhost:3001/videogames/')).data;
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: data
        })
    }
};

export const getGenres = () => {
    return async (dispatch) => {
        let data = (await axios.get('http://localhost:3001/genres/')).data;
        return dispatch({
            type: 'GET_GENRES',
            payload: data
        })
    }
};

export const getDetail = (payload) => {
    return async (dispatch) => {
        let data = (await axios.get(`http://localhost:3001/videogame/${payload}`)).data;
        return dispatch({
            type: 'GET_DETAIL',
            payload: data
        })
    }
}

export const searchByName = (payload) => {
    return async (dispatch) => {
        let data = (await axios.get(`http://localhost:3001/videogames?name=${payload}`)).data;
        return dispatch({
            type: 'GET_BY_NAME',
            payload: data
        })
    }
}

export const returnAll = () => {
    return async (dispatch) => {
        dispatch({
            type: 'RETURN_ALL'
        })
    }
}

export const filterBy = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: 'FILTER_BY',
            payload: payload
        })
    }
}

export const orderBy = (payload) => {
    return {
        type: 'ORDER_BY',
        payload: payload
    }
}
