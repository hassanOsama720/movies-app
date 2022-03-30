import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Movies from './Components/Movies';
import Details from './Components/Details';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
