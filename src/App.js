import React, { createContext } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login'
import Appointment from './components/AppointmentPage/Appointmet/Appointment';
import Dashboard from './components/DashBoard/DashBoard/DashBoard'
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Navbar from './components/Shared/Navbar/Navbar'
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <Route path="/comingSoon">
              <Navbar/>
              <h3 className="text-center mt-5">The page is developing new feature is coming soon!!!</h3>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <h3 className="text-center my-5">Page Not Found</h3>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
