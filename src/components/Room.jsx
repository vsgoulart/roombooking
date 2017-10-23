"use strict";

import "../styles/Room.scss";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Room = ({ name, location, equipment, size, capacity }) => (
  <div className="room">
    <h2 className="name">Room {name}</h2>
    <span className="location">{location}, </span>
    <span className="capacity">{capacity} people, </span>
    <span className="size">{size}</span>
    <p>
      <span className="equipment">Equipment:</span> {equipment.join(", ")}
    </p>
    <Link to={`/rooms/${name}`}>Details</Link>
  </div>
);

Room.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  equipment: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired
};

export default Room;
