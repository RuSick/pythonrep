import {
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILED,
  GET_USER_BY_TOKEN,
  GET_USER_BY_TOKEN_FAILED,
  GET_USER_BY_TOKEN_SUCCESS,
} from "../types";
import { apiModule } from "../../common/api";

export const authUser = () => (dispatch) => {
  dispatch({ type: AUTH_USER });
  apiModule
    .authUser()
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("jogging_token", res.access_token);
      dispatch({ type: AUTH_USER_SUCCESS });
    })
    .catch((err) => dispatch({ type: AUTH_USER_FAILED }));
};

export const getUserByToken = () => (dispatch) => {
  dispatch({ type: GET_USER_BY_TOKEN });
  apiModule
    .getUser()
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else throw res;
    })
    .then((res) => {
      dispatch({ type: GET_USER_BY_TOKEN_SUCCESS, payload: res.response });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_BY_TOKEN_FAILED });
    });
};
