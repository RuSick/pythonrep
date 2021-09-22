import {
  SET_FILTER_VALUES,
  OPEN_FILTER_DIALOG,
  REMOVE_FILTER_VALUES,
  CLOSE_FILTER_DIALOG,
} from "../types";

const initialState = {
  isDialogOpen: false,
  filterValues: {},
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTER_DIALOG:
      return {
        ...state,
        isDialogOpen: true,
      };
    case CLOSE_FILTER_DIALOG:
      return {
        ...state,
        isDialogOpen: false,
      };
    case SET_FILTER_VALUES:
      return {
        ...state,
        filterValues: action.payload,
      };
    case REMOVE_FILTER_VALUES:
      return { ...state, filterValues: [] };

    default:
      return { ...state };
  }
};
