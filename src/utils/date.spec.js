"use strict";

import {
  convertInputDateToUNIXTime,
  convertUNIXTimeToInputDate,
  isDateOnInterval
} from "./date";

describe("./src/utils/date.js functions", () => {
  test("convertInputDateToUNIXTime()", () => {
    expect(convertInputDateToUNIXTime("2017-10-23")).toBe(
      new Date("2017-10-23").getTime()
    );
  });

  test("convertUNIXTimeToInputDate()", () => {
    expect(convertUNIXTimeToInputDate(new Date("2017-10-23").getTime())).toBe(
      "2017-10-23"
    );
  });

  test("isDateOnInterval()", () => {
    expect(
      isDateOnInterval("10:13 - 19:00", new Date(2017, 9, 23, 10, 13))
    ).toBe(true);
  });
});
