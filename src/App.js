import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "./logo.png";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from "./Components/Menu";
import CreateSurvey from "./Components/CreateSurvey";
import Published from "./Components/Published";

function App() {
  const [allQue, setAllQue] = useState([]);
  const [ispublish, setIspublish] = useState(false);


  return (
    <div className="app">
      <div className = "col-md-10 col-12 offset-md-1 text-center">

        <Router>
          <Link to = "/">
            <img className ="col-md-6" src = {Logo} alt = "logo"/>
          </Link>
          <Switch>
            <Route path ="/" component = {Menu} exact/>

            <Route path ="/createSurvey"><CreateSurvey allQue = {allQue} setAllQue = {setAllQue} ispublish = {ispublish} setIspublish = {setIspublish}/></Route>
            <Route path ="/takeSurvey"><Published  allQue = {allQue} ispublish = {ispublish} setIspublish = {setIspublish}/></Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
