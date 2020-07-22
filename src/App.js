import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Homepage from "./Homepage";

import About from "./About";
import Register from "./Register";
import Footer from "./Footer"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}


const PageNotFound = () => {
  return (
    <h1>Page not found</h1>
  )
}

export default App;
