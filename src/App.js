import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css'
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './pages/Loginpage';
import Register from './pages/Registerpage';
import Recipepage from './pages/Recipepage';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Nav/>
          <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <div className="recipe-page">
              <Route exact path="/recipe" component={Recipepage} />
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
