import { ADD_CAMPUS, GET_CAMPUSES, REMOVE_CAMPUS, UPDATE_CAMPUS } from "../constants/";
import axios from 'axios';

export const addCampus = (payload) => {
  return (dispatch) => {
    return axios.post(`http://localhost:1337/api/campuses`, payload)
      .then(res => res.data)
      .then(json => {
        dispatch({ type: ADD_CAMPUS, payload: json })
      })
  };
}

export const getCampuses = () => {
  return (dispatch) => {
    return fetch('http://localhost:1337/api/campuses')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: GET_CAMPUSES, payload: json });
      })
  };
}

export const removeCampus = (payload) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:1337/api/campuses/${payload.id}`, payload)
      .then(() => {
        dispatch({ type: REMOVE_CAMPUS, payload })
      })
  };
}

export const updateCampus = (payload) => {
  return (dispatch) => {
    return axios.put(`http://localhost:1337/api/campuses/${payload.id}`, payload)
      .then(() => {
        dispatch({ type: UPDATE_CAMPUS, payload })
      })
  };
}
