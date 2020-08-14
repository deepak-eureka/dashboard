import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import Sidebar from "./components/Sidebar";
import Course from "./components/Course";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="home-main">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/course" component={Course}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
