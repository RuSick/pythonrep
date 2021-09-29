import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header/header.container";
import Info from "./components/info/info";
import Jogs from "./components/jogs/jogs.container";
import LetMeIn from "./components/letMeIn/letMeIn.container";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = (props) => {
  useEffect(() => {
    props.onMount();
  }, []);

  return (
    <div className="">
      <Header />

      <Switch>
        {props.isUserAuthorised !== null && !props.isUserAuthorised && (
          <>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/info">
              <Redirect to="/login" />
            </Route>
          </>
        )}
        {props.isUserAuthorised && (
          <>
            <Route path="/login">
              <Redirect to="/" />
            </Route>
            <Route exact path="/">
              <Jogs />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
