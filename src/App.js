import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Heroes from "./components/heroes"
import NotFound from './components/notfound';
import NavBar from './components/common/navbar';
import SigninForm from "./components/common/signinForm";
import RegisterForm from './components/registerForm';
import HeroForm from './components/heroForm';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <main className="container">
            <Switch>
                <Route path="/signin" component={SigninForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/heroes/:id" component={HeroForm}></Route>
                <Route path="/heroes" component={Heroes}></Route>
                <Route path="/not-found" component={NotFound}></Route>
                <Redirect from="/" exact to="/heroes"/>
                <Redirect to="/not-found" />
            </Switch>
        </main>
    </React.Fragment>
  );
}
 
export default App;
