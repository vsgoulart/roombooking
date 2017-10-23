"use string";

export default () =>
  Math.random()
    .toString(36)
    .substr(7);
