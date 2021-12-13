import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Navigation.css';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import NavLogo from "../NavLogo/NavLogo";




// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Navigation
() {
  return (
    <Router>
      <div>
        <div className='nav'>
        <p >
            <Link
              className='link1' to="/"><NavLogo /></Link>
          </p>
          <p >
            <Link
              className='link' to="/">Home</Link>
          </p>
          <p >
            <Link
            className='link' to="/about">About</Link>
          </p>
          <p >
            <Link 
            className='link' to="/dashboard">Dashboard</Link>
          </p>
        </div>

      

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}