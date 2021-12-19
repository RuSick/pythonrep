import { apiModule } from "../../common/api";
import {
  ADD_JOG,
  ADD_JOG_FAILED,
  ADD_JOG_SUCCESS,
  EDIT_JOG,
  EDIT_JOG_FAILED,
  EDIT_JOG_SUCCESS,
  GET_USER_JOGS,
  GET_USER_JOGS_FAILED,
  GET_USER_JOGS_SUCCESS,
} from "../types";

export const getUserJogs = () => (dispatch) => {
  dispatch({ type: GET_USER_JOGS });
  apiModule
    .getUserJogs()
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else throw res.error_message;
    })
    .then((res) => {
      dispatch({ type: GET_USER_JOGS_SUCCESS, payload: res.user_jogs });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_JOGS_FAILED, payload: err });
    });
};

export const addJog = (data) => (dispatch) => {
  dispatch({ type: ADD_JOG });
  apiModule
    .addJog(data)
    .then((res) => {
      if (res.ok) return res.json();
      else throw res.error_message;
    })
    .then((res) => {
      dispatch({ type: ADD_JOG_SUCCESS, payload: res.Jog });
    })
    .catch((err) => dispatch({ type: ADD_JOG_FAILED, payload: err }));
};

export const editJog = (data) => (dispatch) => {
  console.log(data)
  dispatch({ type: EDIT_JOG });
  apiModule
    .editJog(data)
    .then((res) => {
      if (res.ok) return res.json();
      else throw res.error_message;
    })
    .then((res) => {
      dispatch({ type: EDIT_JOG_SUCCESS, paylaod: res.response });
    })
    .catch((err) => dispatch({ type: EDIT_JOG_FAILED, payload: err }));
};
