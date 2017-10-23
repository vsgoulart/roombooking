"use strict";

export const convertInputDateToUNIXTime = date => new Date(date).getTime();

export const convertUNIXTimeToInputDate = date =>
  new Date(date).toISOString().split("T")[0];

export const isDateOnInterval = (intervalDate, interval, targetTime) => {
  let lowerBound = new Date(intervalDate);
  lowerBound.setHours(getHour(getLowerLimit(interval)));
  lowerBound.setMinutes(getMinutes(getLowerLimit(interval)));
  lowerBound = lowerBound.getTime();

  let upperBound = new Date(intervalDate);
  upperBound.setHours(getHour(getUpperLimit(interval)));
  upperBound.setMinutes(getMinutes(getUpperLimit(interval)));
  upperBound = upperBound.getTime();

  return lowerBound <= targetTime && targetTime <= upperBound;
};

const getLowerLimit = interval => interval.split(" - ")[0];

const getUpperLimit = interval => interval.split(" - ")[1];

const getHour = time => parseInt(time.split(":")[0]);

const getMinutes = time => parseInt(time.split(":")[1]);

const isDateOnLowerBound = (date, lowerBound) => {
  if (lowerBound.hour < date.hour) {
    return true;
  } else if (lowerBound.hour == date.hour) {
    return lowerBound.minutes <= date.minutes;
  } else {
    return false;
  }
};

const isDateOnUpperBound = (date, upperBound) => {
  if (upperBound.hour > date.hour) {
    return true;
  } else if (upperBound.hour == date.hour) {
    return upperBound.minutes >= date.minutes;
  } else {
    return false;
  }
};
