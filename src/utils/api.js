"use strict";

import "whatwg-fetch";

const apiURL = "https://challenges.1aim.com/roombooking";

export const getRooms = date =>
  fetch(`${apiURL}/getrooms/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ date })
  }).then(response => response.json());

export const sendPass = booking =>
  fetch(`${apiURL}/sendpass/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(booking)
  }).then(response => response.json());
