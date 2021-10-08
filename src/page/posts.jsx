import React, { useState, useContext, useEffect, useCallback } from 'react'
import axios from 'axios'

import { UserContext } from '../Context/userContext'
import styled from 'styled-components'

const Posts = ({ postId }) => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [postInfo, setPostInfo] = useState({})

  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [category, setCategory] = useState('')
  const [requiredTime, setRequiredTime] = useState('')
  const [content, setContent] = useState('')

  const [mainImg, setMainImg] = useState('')
  const [contentImg, setContentImg] = useState('')

  const [ingredients, setIngredients] = useState('')
  const [amount, setAmount] = useState('')

  const [tasteScore, setTasteScore] = useState('')
  const [easyScore, setEasyScore] = useState('')
  const [comment, setComment] = useState('')

  // useEffect(async () => {
  //   await axios.get(`https://localhost:4000/posts/${postId}`)
  //   .then((res) => {
  //     // console.log('res: ', res.data.data)
  //     // setPostInfo(res.data.data)
  //   })
  // })

  // const addFavorite = async () => {
  //   await axios.post(`https://localhost:4000/posts/${postId}/favorite/add`, {
  //     userId: userInfo.id
  //   }, {
  //     'Content-Type': 'application/json'
  //   })
  // }

  // const deleteFavorite = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/favorite/delete`, {
  //     data : {
  //       userId: userInfo.id
  //     }
  //   })
  // }

  // const updatePost = async () => {
  //   let content = [content1, content2].join('@');
  //   let contentImgs = [contentImg1, contentImg2].join(',');
  //   let ing1 = [ingredients1, amount1].join(',');
  //   let ing2 = [ingredients2, amount2].join(',');
  //   let ingredients = [ing1, ing2].join('@');

  //   await axios.put(`https://localhost:4000/posts/${postId}/update`, {
  //     title,
  //     introduction,
  //     category,
  //     requiredTime,
  //     content,
  //     mainImg,
  //     contentImgs,
  //     ingredients
  //   })
  // }

  // const deletePost = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/delete`)
  // }

  // const evaluateTaste = async () => {
  //   const score = parseFloat(tasteScore)
  //   await axios.post(`https://localhost:4000/posts/${postId}/tasteScore`, {
  //     userId: userInfo.id,
  //     score: score
  //   })
  // }

  // const evaluateEasy = async () => {
  //   const score = parseFloat(easyScore)
  //   await axios.post(`https://localhost:4000/posts/${postId}/easyScore`, {
  //     userId: userInfo.id,
  //     score: score
  //   })
  // }

  // const writeComment = async () => {
  //   await axios.post(`https://localhost:4000/posts/${postId}/comment`, {
  //     userId: userInfo.id,
  //     content: comment
  //   }, {
  //     'Content-Type': 'application/json'
  //   })
  // }

  // const updateComment = async () => {
  //   await axios.put(`https://localhost:4000/posts/${postId}/comment/update`, {
  //     // id: // comment id 줘야 함
  //     content: comment
  //   })
  // }

  // const deleteComment = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/comment/delete`, {
  //     // data : {
  //     //   id // comment id 줘야 함
  //     // }
  //   })
  // }

  return (
    <Container>
      <Header
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dlkl7penh/image/upload/c_fill,h_700,w_700/v1633590047/main/jpj0c4ft7rg6zbehf1jv.jpg')`,
        }}
      >
        header MainImg
      </Header>
      <IntroductionStyle>
        <p>
         일요일 아침의 바나나와 팬 케이크
        </p>
      </IntroductionStyle>
      <ScoreAndStyle>Score and favorite</ScoreAndStyle>
      <ContentStyle>contents</ContentStyle>
      <ContentImg />
      <ContentImg />
      <ContentImg />
      <ContentImg />
      <Comments></Comments>
      <div className="grid-item grid-item-6">grid6</div>
      <div className="grid-item grid-item-7">grid7</div>
      <div className="grid-item grid-item-8">grid8</div>
      <div className="bubble"></div>
    </Container>
  )
}

export default Posts

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
  padding: 50px 20px 50px 100px;
  justify-content: stretch;
  align-items: stretch;
  background-color: #eeff01c7;
  z-index: -2;
  margin-top: 30px;
  .bubble {
    border-radius: 100%;
    background-color: #190bdf7d;
    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -40%;
  }
`
const Header = styled.div`
  grid-column: span 3;
  grid-row: span 3;
  background-color: aqua;
  z-index: 2;
  border-radius: 12%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const IntroductionStyle = styled.div`
  grid-row: span 3;
  background-color: #ffffff14;

  p {
    padding: 20px 20px;
    font-size: 50px;
    font-style: italic;
    font-family:'Noto Sans Mono', monospace;;
    writing-mode: vertical-lr;
    text-orientation: upright;
    outline: none;
    border: none;
    
  }
`
const ScoreAndStyle = styled.div`
  background-color: #23a16286;
  grid-column: span 4;
  grid-row: span 1;
`

const ContentStyle = styled.div`
  background-color: #e6eeea85;
  grid-column: span 4;
  grid-row: span 2;
`

const ContentImg = styled.div`
  background-color: #e6eeea85;
`

const Comments = styled.div`
  background-color: #707274ae;
  grid-column: span 3;
  grid-row: span 5;
`
