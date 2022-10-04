import axios from "axios";

export const getVideogames = () => {
  return async (dispatch) => {
    let data = (await axios.get("https://pi-videogames-six-nu.vercel.app/videogames/")).data;
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: data,
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    let data = (await axios.get("https://pi-videogames-six-nu.vercel.app/genres/")).data;
    return dispatch({
      type: "GET_GENRES",
      payload: data,
    });
  };
};

export const getDetail = (payload) => {
  return async (dispatch) => {
    try {
      let data = (await axios.get(`https://pi-videogames-six-nu.vercel.app/videogame/${payload}`))
        .data;
      return dispatch({
        type: "GET_DETAIL",
        payload: data,
      });
    } catch (error) {
      alert(`No se encontró ningún videojuego con el id: ${payload}`);
      window.location.href = "/videogames";
    }
  };
};

export const searchByName = (payload) => {
  return async (dispatch) => {
    try {
      let data = (
        await axios.get(`https://pi-videogames-six-nu.vercel.app/videogames?name=${payload}`)
      ).data;
      return dispatch({
        type: "GET_BY_NAME",
        payload: data,
      });
    } catch (error) {
      alert(`No se encontró ningún videojuego con el nombre: ${payload}`);
      window.location.href = "/videogames";
    }
  };
};

export const postVideogame = (payload) => {
  return async (dispatch) => {
    try {
      let data = await axios.post("https://pi-videogames-six-nu.vercel.app/videogames", payload);
      console.log(data);
      return dispatch({
        type: "POST_VIDEOGAME",
      });
    } catch (error) {
      alert(`No se pudo crear el videojuego: ${payload.name}`);
      window.location.href = "/videogames";
    }
  };
};

export const deleteCache = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_CACHE",
    });
  };
};

export const returnAll = () => {
  return async (dispatch) => {
    dispatch({
      type: "RETURN_ALL",
    });
  };
};

export const filterBy = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "FILTER_BY",
      payload: payload,
    });
  };
};

export const orderBy = (payload) => {
  return {
    type: "ORDER_BY",
    payload: payload,
  };
};
