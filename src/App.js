import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Movies from './Components/Movies';
import Details from './Components/Details';
import Fav from './Components/Fav';
import { languageContext } from "./context/language";
import { useState } from 'react';

function App() {
  const [langContext, setLangContext] = useState("en");
  return (
    <languageContext.Provider value={{ langContext, setLangContext }}>

    <Router>
      <NavBar />
      <div className="container my-5">
        <Switch>
          <Route path="/home"  exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" exact component={Details} />
          <Route path="/fav" exact component={Fav} />
        </Switch>
      </div>
    </Router>
    </languageContext.Provider>
  );
}

export default App;
