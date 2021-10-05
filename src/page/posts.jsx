import React, { useState, useContext, useEffect, useCallback } from 'react'
import axios from 'axios'

import { UserContext } from '../Context/userContext'

const Posts = ({ postId }) => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [postInfo, setPostInfo] = useState({})

  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [category, setCategory] = useState('');
  const [requiredTime, setRequiredTime] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [mainImg, setMainImg] = useState('');
  const [contentImg1, setContentImg1] = useState('');
  const [contentImg2, setContentImg2] = useState('');
  const [ingredients1, setIngredients1] = useState('');
  const [amount1, setAmount1] = useState('');
  const [ingredients2, setIngredients2] = useState('');
  const [amount2, setAmount2] = useState('');
  const [tasteScore, setTasteScore] = useState('');
  const [easyScore, setEasyScore] = useState('');
  const [comment, setComment] = useState('');

  const onChangeTitle = useCallback((event) => {
      setTitle(event.target.value);
  }, []);

  const onChangeIntroduction = useCallback((event) => {
      setIntroduction(event.target.value);
  }, []);

  const onChangeCategory = useCallback((event) => {
      setCategory(event.target.value);
  }, []);

  const onChangeRequiredTime = useCallback((event) => {
      setRequiredTime(event.target.value);
  }, []);

  const onChangeContent1 = useCallback((event) => {
      setContent1(event.target.value);
  }, []);

  const onChangeContent2 = useCallback((event) => {
      setContent2(event.target.value);
  }, []);

  const onChangeMainImg = useCallback((event) => {
      setMainImg(event.target.value);
  }, []);

  const onChangeContentImg1 = useCallback((event) => {
      setContentImg1(event.target.value);
  }, []);

  const onChangeContentImg2 = useCallback((event) => {
      setContentImg2(event.target.value);
  }, []);

  const onChangeIngredients1 = useCallback((event) => {
      setIngredients1(event.target.value);
  }, []);

  const onChangeAmount1 = useCallback((event) => {
      setAmount1(event.target.value);
  }, []);

  const onChangeIngredients2 = useCallback((event) => {
      setIngredients2(event.target.value);
  }, []);

  const onChangeAmount2 = useCallback((event) => {
      setAmount2(event.target.value);
  }, []);

  const onChangeTasteScore = useCallback((event) => {
    setTasteScore(event.target.value);
  }, []);

  const onChangeEasyScore = useCallback((event) => {
    setEasyScore(event.target.value);
  }, []);

  const onChangeComment = useCallback((event) => {
    setComment(event.target.value);
  }, []);

  useEffect(async () => {
    await axios.get(`https://localhost:4000/posts/${postId}`)
    .then((res) => {
      // console.log('res: ', res.data.data)
      // setPostInfo(res.data.data)
    })
  })

  const addFavorite = async () => {
    await axios.post(`https://localhost:4000/posts/${postId}/favorite/add`, {
      userId: userInfo.id
    }, {
      'Content-Type': 'application/json'
    })
  }

  const deleteFavorite = async () => {
    await axios.delete(`https://localhost:4000/posts/${postId}/favorite/delete`, {
      data : {
        userId: userInfo.id
      }
    })
  }

  const updatePost = async () => {
    let content = [content1, content2].join('@');
    let contentImgs = [contentImg1, contentImg2].join(',');
    let ing1 = [ingredients1, amount1].join(',');
    let ing2 = [ingredients2, amount2].join(',');
    let ingredients = [ing1, ing2].join('@');

    await axios.put(`https://localhost:4000/posts/${postId}/update`, {
      title,
      introduction,
      category,
      requiredTime,
      content,
      mainImg,
      contentImgs,
      ingredients
    })
  }

  const deletePost = async () => {
    await axios.delete(`https://localhost:4000/posts/${postId}/delete`)
  }

  const evaluateTaste = async () => {
    const score = parseFloat(tasteScore)
    await axios.post(`https://localhost:4000/posts/${postId}/tasteScore`, {
      userId: userInfo.id,
      score: score
    })
  }

  const evaluateEasy = async () => {
    const score = parseFloat(easyScore)
    await axios.post(`https://localhost:4000/posts/${postId}/easyScore`, {
      userId: userInfo.id,
      score: score
    })
  }

  const writeComment = async () => {
    await axios.post(`https://localhost:4000/posts/${postId}/comment`, {
      userId: userInfo.id,
      content: comment
    }, {
      'Content-Type': 'application/json'
    })
  }

  const updateComment = async () => {
    await axios.put(`https://localhost:4000/posts/${postId}/comment/update`, {
      // id: // comment id 줘야 함
      content: comment
    })
  }

  const deleteComment = async () => {
    await axios.delete(`https://localhost:4000/posts/${postId}/comment/delete`, {
      // data : {
      //   id // comment id 줘야 함
      // }
    })
  }

  return (
    <div>
      <button onClick={addFavorite}>즐겨찾기 등록</button>
      <button onClick={deleteFavorite}>즐겨찾기 제거</button>
      <div></div>
      <br />
      <br />
      <input type="text" placeholder="제목" value={title} onChange={onChangeTitle} />
      <br/>
      <input type="text" placeholder="설명" value={introduction} onChange={onChangeIntroduction} />
      <br/>
      <input type="text" placeholder="카테고리" value={category} onChange={onChangeCategory} />
      <br/>
      <input type="text" placeholder="소요시간" value={requiredTime} onChange={onChangeRequiredTime} />
      <br/>
      <input type="text" placeholder="콘텐트1" value={content1} onChange={onChangeContent1} />
      <br/>
      <input type="text" placeholder="콘텐트2" value={content2} onChange={onChangeContent2} />
      <br/>
      <input type="text" placeholder="메인사진" value={mainImg} onChange={onChangeMainImg} />
      <br/>
      <input type="text" placeholder="사진1" value={contentImg1} onChange={onChangeContentImg1} />
      <br/>
      <input type="text" placeholder="사진2" value={contentImg2} onChange={onChangeContentImg2} />
      <br/>
      <input type="text" placeholder="재료1" value={ingredients1} onChange={onChangeIngredients1} />
      <br/>
      <input type="text" placeholder="양1" value={amount1} onChange={onChangeAmount1} />
      <br/>
      <input type="text" placeholder="재료2" value={ingredients2} onChange={onChangeIngredients2} />
      <br/>
      <input type="text" placeholder="양2" value={amount2} onChange={onChangeAmount2} />
      <br/>
      <button onClick={updatePost}>게시글 수정</button>
      <button onClick={deletePost}>게시글 삭제</button>

      <br />
      <br />
      <input type="text" placeholder="맛별점" value={tasteScore} onChange={onChangeTasteScore} />
      <button onClick={evaluateTaste}>맛별점 주기</button>
      <br/>
      <input type="text" placeholder="간편성별점" value={easyScore} onChange={onChangeEasyScore} />
      <button onClick={evaluateEasy}>간편성별점 주기</button>
      <br/>
      <br/>

      <input type="text" placeholder="댓글" value={comment} onChange={onChangeComment} />
      <button onClick={writeComment}>댓글 달기</button>
      <button onClick={updateComment}>댓글 수정</button>
      <button onClick={deleteComment}>댓글 삭제</button>

      
    </div>
  )
}

export default Posts
