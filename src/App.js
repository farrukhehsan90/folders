import React from "react";
import "./App.css";
import Login from './containers/login';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Explorer from "./containers/explorer";
import PrivateRoute from "./components/privateRoute";
// import SideBar from "./containers/sideBar";

function App() {
  return (
    <Router>
    <div className="App ">
      <div className="flex fullpage">
        <Route exact path="/" component={Login}/>
        <PrivateRoute exact path="/explorer" component={Explorer} />
      </div>
    </div>
    </Router>
  );
}

export default App;
