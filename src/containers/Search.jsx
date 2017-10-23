"use strict";

import "../styles/Search.scss";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRooms, filterRooms, getAvailableRooms } from "../actions/rooms";
import generateRandomKey from "../utils/generateRandomKey";
import {
  convertInputDateToUNIXTime,
  convertUNIXTimeToInputDate
} from "../utils/date";

import Room from "../components/Room";
import RoomFilterControl from "../components/RoomFilterControl";
import FadeAnimation from "../components/FadeAnimation";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      selectedDate: convertUNIXTimeToInputDate(Date.now()),
      roomFilter: "",
      availableNowFilter: false
    };
  }

  render() {
    const { rooms, areRoomsFetching, errorOnFetch } = this.props;
    const { selectedDate, roomFilter, availableNowFilter } = this.state;
    let filteredRooms = filterRooms(rooms, roomFilter);

    if (availableNowFilter) {
      filteredRooms = getAvailableRooms(filteredRooms);
    }

    if (areRoomsFetching) {
      return (
        <Layout>
          {this.renderHeader()}
          <FadeAnimation>
            <h1 key={generateRandomKey()}>loading</h1>
          </FadeAnimation>
        </Layout>
      );
    } else if (errorOnFetch) {
      return (
        <Layout>
          {this.renderHeader()}
          <FadeAnimation>
            <h1 key={generateRandomKey()}>error</h1>
          </FadeAnimation>
        </Layout>
      );
    } else {
      return (
        <Layout>
          {this.renderHeader()}
          <FadeAnimation>
            {filteredRooms.length ? (
              filteredRooms.map(room => (
                <Room key={generateRandomKey()} {...room} />
              ))
            ) : (
              <h1 key={generateRandomKey()}>No rooms found</h1>
            )}
          </FadeAnimation>
        </Layout>
      );
    }
  }

  renderHeader() {
    const { selectedDate, roomFilter, availableNowFilter } = this.state;

    return (
      <div className="header">
        <RoomFilterControl
          selectedDate={selectedDate}
          selectedDateOnChangeHandler={event => {
            this.setState({ selectedDate: event.target.value });
          }}
          roomFilter={roomFilter}
          roomFilterChangeHandler={event => {
            this.setState({ roomFilter: event.target.value });
          }}
          availableNowFilter={availableNowFilter}
          availableNowChangeHandler={event => {
            this.setState({ availableNowFilter: event.target.checked });
          }}
        />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { getRooms } = this.props;
    const { selectedDate } = this.state;

    if (prevState.selectedDate != selectedDate && selectedDate != "") {
      getRooms(convertInputDateToUNIXTime(selectedDate));
    }
  }

  componentDidMount() {
    const { getRooms } = this.props;

    getRooms(Date.now());
  }
}

const Layout = ({ children }) => (
  <section className="search">{children}</section>
);

const mapStateToProps = state => ({
  rooms: state.rooms.data,
  areRoomsFetching: state.rooms.isFetching,
  errorOnFetch: state.rooms.error
});

const mapDispatchToProps = dispatch => ({
  getRooms(date) {
    dispatch(fetchRooms(date));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
