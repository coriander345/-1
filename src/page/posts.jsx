import React, { useContext } from 'react'
import axios from 'axios'

import { UserContext } from '../Context/userContext'

const Posts = ({ postId }) => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  console.log('user: ', userInfo.id)
  console.log('post: ', postId)

  const addFavorite = async () => {
    await axios.post(`https://localhost:4000/posts/${postId}/favorite/add`, {
      userId: userInfo.id
    }, {
      'Content-Type': 'application/json'
    })
  }

  const deleteFavorite = async () => {
    // await 
  }

  return (
    <div>
      <button onClick={addFavorite}>즐겨찾기 등록</button>
      <button onClick={deleteFavorite}>즐겨찾기 제거</button>
    </div>
  )
}

export default Posts
