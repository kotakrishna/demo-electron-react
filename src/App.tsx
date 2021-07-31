import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import LoginPage from './Pages/LoginPage'
import NavBar from './Components/NavBar'
// import { Link ,Route,Switch,HashRouter } from 'react-router'
import HomePage from './Pages/HomePage'
import RequisitionPage from './Pages/RequisitionPage'
// import axios from "axios";

export default function App() {
  return (
    <Router>
      <Switch>
            <Route path="/req" exact >
            {/* <HomePage/> */}
            <NavBar />
            <RequisitionPage/>
                </Route>
            <Route path="/login"  exact>
            <LoginPage/>
            </Route>
            <Route path="/"  >
            <NavBar />
            <HomePage/>
                </Route>
        </Switch>
    </Router>
  );
}
