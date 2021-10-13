import React, {useState} from "react";
import './App.css';
import MainNavigation from "./components/UI/MainNavigation";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import DatePrincipale from "./components/DatePrincipale/DatePrincipale";
import GalerieFoto from "./components/GalerieFoto/GalerieFoto";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Auth/Profile";


function App() {
    const [showProfile, setShowProfile]= useState(false);





  return (
      <Router>
          <MainNavigation />
          {showProfile ? <Profile/> : <Auth />}
          <main>
              <Switch>
                  <Route path="/" exact>
                      <DatePrincipale />
                  </Route>
                  <Route path="/galerie-foto" exact>
                     <GalerieFoto />
                  </Route>
                   <Route path="/auth" exact>
                     <Auth />
                  </Route>

                  <Redirect to="/" />
              </Switch>
          </main>
      </Router>
  );
}

export default App;
