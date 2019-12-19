import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReduxExample from "./ReduxExample/ReduxExample";
import ContextExample from "./ContextExample/ContextExample"

function App() {
  return (
    <Router>
      <div  style={{background:"#33cccc",height:"35px",paddingTop:"15px"}}>
        <Link to="/">Redux Example</Link>
        <Link to="/context" style={{padding:"50px"}}>Context Example</Link>
      </div>
      <Switch>
      <Route exact path="/"><ReduxExample /></Route>
      <Route path="/context"><ContextExample /></Route>
      </Switch>      
    </Router>
  );
}

export default App;
