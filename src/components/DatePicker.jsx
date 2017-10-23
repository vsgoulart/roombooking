"use strict";

import "../styles/DatePicker.scss";

import React from "react";
import PropTypes from "prop-types";

const DatePicker = ({ selectedDate, onChangeHandler }) => (
  <input
    type="date"
    value={selectedDate}
    onChange={onChangeHandler}
    className="datepicker"
  />
);

DatePicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default DatePicker;
