import React, { useState, useEffect } from 'react';
import './App.css';

import AuthApi from './Components/Authentication/AuthApi'
import UserRoutes from './Components/Support Files/UserRoutes'
import VistorRoutes from './Components/Support Files/VistorRoutes'
import Cookies from 'js-cookie'

import { BrowserRouter as Router, Route } from 'react-router-dom'

//Works better with Authtication and Redux
const App = () => {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>
        <div className="App">
          <Route
            render = {() => auth? (
              <UserRoutes />
              ):
            (
              <VistorRoutes />
              )
            }
        />
        </div>
      </Router>
    </AuthApi.Provider>
  )
}

export default App;
