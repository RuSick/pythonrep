import {
  AUTH_USER,
  AUTH_USER_FAILED,
  AUTH_USER_SUCCESS,
  GET_USER_BY_TOKEN,
  GET_USER_BY_TOKEN_FAILED,
  GET_USER_BY_TOKEN_SUCCESS,
} from "../types";

const initialState = {
  isAuthPending: false,
  isUserAuthorised: null,
  err: null,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authPending: true,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        authPending: false,
        err: null,
        isUserAuthorised: true,
      };
    case AUTH_USER_FAILED:
      return {
        ...state,
        authPending: false,
        err: action.payload,
        isUserAuthorised: false,
      };
    case GET_USER_BY_TOKEN:
      return {
        ...state,
        authPending: true,
        err: null,
      };
    case GET_USER_BY_TOKEN_SUCCESS:
      return {
        ...state,
        authPending: false,
        err: null,
        isUserAuthorised: true,
        user: action.payload,
      };
    case GET_USER_BY_TOKEN_FAILED:
      return {
        ...state,
        authPending: false,
        isUserAuthorised: false,
        user: null,
      };
    default:
      return { ...state };
  }
};
