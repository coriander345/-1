import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { AuthContext } from '../Context/authContext'

const PrivateRoute = ({children, ...rest}) => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Route {...rest} render={(props) =>{
      return isLoggedIn ? children : <Redirect to='/' />
    }}>
    </Route>
  )
}

export default PrivateRoute
