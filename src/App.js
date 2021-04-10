import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "./logo.png";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from "./Components/Menu";
import CreateSurvey from "./Components/CreateSurvey";
import Published from "./Components/Published";

function App() {
  return (
    <div className="App">
      <div className = "col-md-10 col-12 offset-md-1 text-center">

        <Router>
          <Link to = "/">
            <img className ="col-md-6" src = {Logo} alt = "logo"/>
          </Link>
          <Switch>
            <Route path ="/" component = {Menu} exact/>

            <Route path ="/createSurvey"><CreateSurvey/></Route>
            <Route path ="/published"><Published /></Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
