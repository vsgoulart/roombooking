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

  return lowerBound <= targetTime && targetTime + 1000 * 60 * 60 <= upperBound;
};

const getLowerLimit = interval => interval.split(" - ")[0];

const getUpperLimit = interval => interval.split(" - ")[1];

const getHour = time => parseInt(time.split(":")[0]);

const getMinutes = time => parseInt(time.split(":")[1]);
