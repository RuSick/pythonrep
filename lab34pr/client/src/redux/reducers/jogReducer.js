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

const initialState = {
  isJogsPending: null,
  jogs: [],
  err: null,
};

export const jogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_JOGS:
      return {
        ...state,
        isJogsPending: true,
        jogs: [],
        err: null,
      };
    case GET_USER_JOGS_FAILED:
      return {
        ...state,
        isJogsPending: false,
        jogs: [],
        err: action.payload,
      };
    case GET_USER_JOGS_SUCCESS:
      return {
        ...state,
        isJogsPending: false,
        jogs: action.payload,
        err: null,
      };
    case ADD_JOG_FAILED:
      return {
        ...state,
        isJogsPending: false,
        err: action.payload,
      };
    case ADD_JOG:
      return {
        ...state,
        isJogsPending: true,
        err: null,
      };
    case ADD_JOG_SUCCESS:
      return {
        ...state,
        isJogsPending: false,
        err: null,
        jogs: [...state.jogs, action.payload],
      };
    case EDIT_JOG:
      return {
        ...state,
        isJogsPending: true,
        err: null,
      };
    case EDIT_JOG_FAILED:
      return {
        ...state,
        isJogsPending: false,
        err: action.payload,
      };
    case EDIT_JOG_SUCCESS:
      return {
        ...state,
        isJogsPending: false,
        err: null,
        jogs: state.jogs.map((jog) => {
          if (jog.id === action.payload.id) return { ...action.payload };
          else return { ...jog };
        }),
      };
    default:
      return { ...state };
  }
};
