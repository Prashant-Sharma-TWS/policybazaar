import { getValue, setValue } from "../../Utils/localStorage";
import {
  USER_DATA_GET_FAILURE,
  USER_DATA_GET_REQUEST,
  USER_DATA_GET_SUCCESS,
  USER_DATA_UPDATE_FAILURE,
  USER_DATA_UPDATE_REQUEST,
  USER_DATA_UPDATE_SUCCESS,
} from "./data.actionTypes";

const initialState = {
  data: getValue("userData") || {
    filter: {
      name: "",
      amount: "",
      age: "",
      sort: "",
      switch: "",
    },
    card: {
      show: true,
      left: 5,
      question: "Do you Smoke or Chew tobacco?",
      smoke: "",
      income: "",
      occupation: "",
      qualification: "",
      isMaharastrian: "",
      btnone: "Yes",
      btntwo: "No",
    },
    plan: {
      amount: "",
    },
  },
  isLoading: false,
  error: false,
};

export const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_DATA_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_DATA_GET_SUCCESS: {
      setValue("userData", payload);
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: false,
      };
    }
    case USER_DATA_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case USER_DATA_UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_DATA_UPDATE_SUCCESS: {
      setValue("userData", payload);
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: false,
      };
    }
    case USER_DATA_UPDATE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
