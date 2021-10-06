import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useContext } from 'react'

import './app.css'
import Info from './page/info'
import Recipe from './page/recipe'
import Write from './page/write';
import Mypage from './page/mypage'
import Signup from './page/signup'
import Search from './page/search'
import { AuthContext } from './Context/authContext'
import { UserContext } from './Context/userContext'
import { AccessTokenContext } from './Context/accessTokenContext'
import NavbarComponent from './component/navbarComponent'
import FooterComponent from './component/footerComponent';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { userInfo, setUserInfo } = useContext(UserContext)
  const { accessToken, setAccessToken } = useContext(AccessTokenContext)

  const isAuthenticated = (info) => {
    setIsLoggedIn(true)
    let { id, email, name, description, createdAt } = info.data
    let user = { id, email, name, description, createdAt }
    setUserInfo(user)
  }

  const handleLogin = (info) => {
    isAuthenticated(info)
  }
  
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserInfo({})
  }

  return (
    <div>
      <Router>
        <NavbarComponent handleLogin={handleLogin} handleLogout={handleLogout} />
        <Switch>
          <Route exact path='/' component={Info} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/mypage' render={() => <Mypage userInfo={userInfo} />} />
          <Route exact path="/write" component={Write} />
          <Route exact path='/recipe' component={Recipe} />
          <Route exact path='/search/:id' component={Search}/>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App