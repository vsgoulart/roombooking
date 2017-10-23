"use strict";

import {
  REQUEST_ROOMS,
  RECEIVE_ROOMS,
  ERROR_ROOMS_REQUEST
} from "../actions/rooms";

const rooms = (
  state = { data: [], isFetching: false, error: undefined },
  action
) => {
  switch (action.type) {
    case REQUEST_ROOMS:
      return { ...state, isFetching: true, error: undefined };
    case RECEIVE_ROOMS:
      return {
        ...state,
        data: [...action.payload.rooms],
        isFetching: false,
        error: undefined
      };
    case ERROR_ROOMS_REQUEST:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default rooms;
