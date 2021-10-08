import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Post from './posts'

const Info = () => {

  const postId = 2;

  return (
    <>
      <Router>
        <NavLink to={`/posts`}>포스트로</NavLink>
        <Switch>
          <Route exact path='/post/:id' render={() => <Post postId={postId}/>} />
        </Switch>
      </Router>
      
    </>
  )
}

export default Info
