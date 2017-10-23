"use strict";

import { getRooms } from "../utils/api";
import { isDateOnInterval } from "../utils/date";

export const fetchRooms = (date = "now") => dispatch => {
  dispatch(requestRooms());

  return getRooms(date)
    .then(response => {
      if (response.error) {
        dispatch(errorOnRoomsRequest(response.error));
      } else {
        dispatch(receiveRooms(response));
      }
    })
    .catch(error => {
      dispatch(errorOnRoomsRequest(error));
    });
};

export const REQUEST_ROOMS = "REQUEST_ROOMS";
export const requestRooms = () => ({ type: REQUEST_ROOMS });

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  payload: { rooms }
});

export const ERROR_ROOMS_REQUEST = "ERROR_ROOMS_REQUEST";
export const errorOnRoomsRequest = error => ({
  type: ERROR_ROOMS_REQUEST,
  payload: { error }
});

export const filterRooms = (rooms, filter) => {
  if (filter != "") {
    return rooms.filter(room => room.name.startsWith(filter));
  } else {
    return [...rooms];
  }
};

export const getAvailableRooms = rooms =>
  rooms.filter(room =>
    room.avail.some(range => isDateOnInterval(range, new Date()))
  );
