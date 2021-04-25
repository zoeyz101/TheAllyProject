import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {Home} from "./Pages/home";
import {Questionnaire} from "./Pages/questionnaire"
import {Resources} from "./Pages/resources"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/resources" component={Resources} />
      </Switch>
    </Router>
  </>
  );
}
export default App;
