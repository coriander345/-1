import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import React, { useContext } from 'react';
import axios from 'axios';

import "./app.css";
import Info from "./page/info";
import Recipe from "./page/recipe";
import Write from "./page/write";
import Mypage from "./page/mypage";

import { AuthContext } from "./Context/authContext";
import { UserContext } from "./Context/userContext";

import Navbar from "./component/navbar";
import PrivateRoute from "./component/privateRoute";
import PrivateRoute2 from "./component/privateRoute2";
import LoginForm from "./component/login";
import Signup from "./page/signup";;

function App() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const {userInfo, setUserInfo} = useContext(UserContext);

  const isAuthenticated = (info) => {
    setIsLoggedIn(true);
    let { id, email, name, description, createdAt } = info.data;
    let user = [id, email, name, description, createdAt];
    setUserInfo(user);
  }
  const handleLogin = (info) => {
    isAuthenticated(info);
  }

  return (
    
    <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Info} />
            <Route exact path="/recipe" component={Recipe} />
            {/* <Route exact path="/search" component={Search} /> */}
            <Route exact path="/login" render={() => <LoginForm handleLogin={handleLogin}/>} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/write" component={Write} />
            <Route exact path="/mypage" component={Mypage} />
            
            {/* { isLoggedIn ? <Redirect to='/' /> : <Redirect to='/login' />} */}
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
