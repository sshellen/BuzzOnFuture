import React, { Suspense, lazy } from "react";
const { BrowserRouter, Route, Switch } = require("react-router-dom");
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";

const Home = lazy(() => import("./Pages/Home"));

const Routes = (
  <BrowserRouter>
    <Suspense fallback=<Loader />>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById("app"));
