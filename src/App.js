import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Course from "./components/course/Course";
import Project from "./components/project/Projects";
import ProjectList from "./components/project/ProjectList";
import Dataset from "./components/project/DataSet";
import Model from "./components/project/Model";
import Test from "./components/project/Test";
import Deploy from "./components/project/Deploy";

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
              <Route exact path="/project" component={Project}></Route>
              <Route exact path="/project/:idx" component={ProjectList}></Route>
              <Route exact path="/project/:idx/dataset" component={Dataset} />
              <Route exact path="/project/:idx/model" component={Model} />
              <Route exact path="/project/:idx/test" component={Test} />
              <Route exact path="/project/:idx/deploy" component={Deploy} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
