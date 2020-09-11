import React from "react";
import './App.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import AppBar from './Components/AppBar/AppBar';

function App() {
 
  return (
    
    <Router>
      <AppBar>
      </AppBar>
      
      <Switch>
      <Route exact path="/post">
        <Home/>
      </Route>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/post/:id">
        <Details/>
      </Route>

    </Switch>
    </Router>

  );
}

export default App;

