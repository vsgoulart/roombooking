"use strict";

import "../styles/RoomFilterControl.scss";

import React from "react";
import PropTypes from "prop-types";

import DatePicker from "../components/DatePicker";

const RoomFilterControl = ({
  selectedDate,
  selectedDateOnChangeHandler,
  roomFilter,
  roomFilterChangeHandler,
  availableNowFilter,
  availableNowChangeHandler
}) => (
  <div className="filter">
    <DatePicker
      selectedDate={selectedDate}
      onChangeHandler={selectedDateOnChangeHandler}
    />
    <input
      type="text"
      placeholder="Room name"
      value={roomFilter}
      onChange={roomFilterChangeHandler}
    />
    <label htmlFor="available-now">
      <input
        type="checkbox"
        name="available-now"
        id="available-now"
        checked={availableNowFilter}
        onChange={availableNowChangeHandler}
      />
      Available now
    </label>
  </div>
);

RoomFilterControl.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  selectedDateOnChangeHandler: PropTypes.func.isRequired,
  roomFilter: PropTypes.string.isRequired,
  roomFilterChangeHandler: PropTypes.func.isRequired,
  availableNowFilter: PropTypes.bool.isRequired,
  availableNowChangeHandler: PropTypes.func.isRequired
};

export default RoomFilterControl;
