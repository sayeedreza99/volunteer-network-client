import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from './component/Book/Book';
import Header from './component/Header/Header';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p> Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
