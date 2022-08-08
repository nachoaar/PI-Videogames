import axios from 'axios';

export const getVideogames = () => {
    return async (dispatch) => {
        let data = (await axios.get('http://localhost:3001/videogames')).data;
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: data
        })
    }
};