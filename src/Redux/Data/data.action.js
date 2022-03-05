import {
  USER_DATA_GET_FAILURE,
  USER_DATA_GET_REQUEST,
  USER_DATA_GET_SUCCESS,
  USER_DATA_UPDATE_FAILURE,
  USER_DATA_UPDATE_REQUEST,
  USER_DATA_UPDATE_SUCCESS,
} from "./data.actionTypes";

export const getUserDataRequest = () => ({
  type: USER_DATA_GET_REQUEST,
});
export const getUserDataSuccess = (payload) => ({
  type: USER_DATA_GET_SUCCESS,
  payload,
});
export const getUserDataFailure = (error) => ({
  type: USER_DATA_GET_FAILURE,
  payload: error,
});

export const updateUserDataRequest = () => ({
  type: USER_DATA_UPDATE_REQUEST,
});
export const updateUserDataSuccess = (payload) => ({
  type: USER_DATA_UPDATE_SUCCESS,
  payload,
});
export const updateUserDataFailure = (error) => ({
  type: USER_DATA_UPDATE_FAILURE,
  payload: error,
});
