import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useContext } from 'react'

import './app.css'
import Info from './page/info'
import Recipe from './page/recipe'
import PostWrite from './page/postWrite'
import Mypage from './page/mypage'
import Signup from './page/signup'
import RecipeAfterSearch from './page/recipeAfterSearch'
import { AuthContext } from './Context/authContext'
import { UserContext } from './Context/userContext'
import { AccessTokenContext } from './Context/accessTokenContext'
import NavbarComponent from './component/navbarComponent'

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { userInfo, setUserInfo } = useContext(UserContext)
  const { accessToken, setAccessToken } = useContext(AccessTokenContext)

  const isAuthenticated = (info) => {
    setIsLoggedIn(true)
    let { id, email, name, description, createdAt } = info.data
    let user = { id, email, name, description, createdAt }
    console.log(info);
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
          <Route exact path='/mypage/:id' component={Mypage} />
          <Route exact path='/postwrite' component={PostWrite} />
          <Route exact path='/recipe' component={Recipe} />
          <Route exact path='/recipe_after_search' component={RecipeAfterSearch} />
          {/* <Route exact path='/login' render={() => <LoginForm handleLogin={handleLogin}/>} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App