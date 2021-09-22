import {
  OPEN_FILTER_DIALOG,
  CLOSE_FILTER_DIALOG,
  SET_FILTER_VALUES,
  REMOVE_FILTER_VALUES,
} from "../types";

export const openFilterDialog = () => ({
  type: OPEN_FILTER_DIALOG,
});

export const closeFilterDialog = () => ({
  type: CLOSE_FILTER_DIALOG,
});

export const setFilterValues = (filterValues) => ({
  type: SET_FILTER_VALUES,
  payload: filterValues,
});

export const removeFilterValues = () => ({
  type: REMOVE_FILTER_VALUES,
});
