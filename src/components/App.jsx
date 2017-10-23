"use strict";

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Search from "../containers/Search";
import RoomInformation from "../containers/RoomInformation";
import RoomBooking from "../containers/RoomBooking";
import NotFound from "./NotFound";

const App = () => (
  <div>
    <header>
      <h1>
        <Link to="/">Room booking</Link>
      </h1>
    </header>
    <main>
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/rooms/:id/" component={RoomInformation} />
        <Route path="/rooms/:id/booking/" component={RoomBooking} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
