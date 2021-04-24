import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Questionnaire from "./pages/questionnaire"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questionnaire" component={Questionnaire} />
      </Switch>
    </Router>
  </>
  );
}
export default App;
