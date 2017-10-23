"use strict";

import "../styles/FadeAnimation.scss";

import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

const FadeAnimation = ({ children }) => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
    {children}
  </CSSTransitionGroup>
);

export default FadeAnimation;
