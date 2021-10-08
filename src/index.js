import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import { AuthContextProvider } from './Context/authContext'
import { UserContextProvider } from './Context/userContext'
import { SearchValueContextProvider } from './Context/searchValueContext'
import { AccessTokenContextProvider } from './Context/accessTokenContext'

ReactDOM.render(
  <AuthContextProvider>
    <AccessTokenContextProvider>
      <UserContextProvider>
        <SearchValueContextProvider>
            <App />
        </SearchValueContextProvider>
      </UserContextProvider>
    </AccessTokenContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

