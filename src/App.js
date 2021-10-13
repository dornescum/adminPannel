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
import Galerie from "./components/Galerie/Galerie";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Auth/Profile";
import {LogginContext} from "./context/LogginContext";


function App() {
    // const [showProfile, setShowProfile]= useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // {showProfile ? <Profile/> : <Auth />}
    let routes;
    if (isLoggedIn){
        routes = (
            <Switch>
                <Route path="/" exact>
                    <DatePrincipale />
                </Route>
                <Route path="/galerie" exact>
                    <Galerie />
                </Route>
                <Route path="/" exact>
                    <Auth />
                </Route>

                <Redirect to="/" />
            </Switch>
            )

    }
    // else {
    //     routes =(
    //         <Switch>
    //             <Route path="/auth" exact>
    //                 <Auth />
    //             </Route>
    //
    //             {/*<Redirect to="/auth" />*/}
    //         </Switch>
    //         )
    //
    // }



  return (
      <LogginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <Router>
              <MainNavigation />
              <main>
                  {isLoggedIn ? routes : <Auth />}
              </main>
          </Router>
      </LogginContext.Provider>

  );
}

export default App;
