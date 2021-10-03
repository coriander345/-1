import React , { useState, useEffect } from 'react'
import styled from 'styled-components'

import MyFavorteComponent from '../component/mypage/myFavorteComponent'
import MyInfoComponent from '../component/mypage/myInfoComponent'
import MyRecipeComponent from '../component/mypage/myRecipeComponent'

const MenuComponent = (props) => {

  const [page, setPage] = useState('myInfo')
  const [show, setShow] = useState(false)

  const changeFavorite = () => setPage('favorite')
  const changeMyRecipe = () => setPage('myRecipe')
  const changeMyInfo = () => setPage('myInfo')
  // transform의 translateX를 0으로 설정 

  useEffect(()=> {
    setShow(true)
  }, [])

  return (
    <Wrap>
      <Nodiv />
      <Menu className={ show ? 'showM' : '' }>
        <MenuTitle>MenuComponent</MenuTitle>
        <List className='myInfo' onClick={changeMyInfo} >나의 정보</List>
        <List className='favorite' onClick={changeFavorite} >즐겨찾기</List>
        <List className='myRecipe' onClick={changeMyRecipe} >나의 레시피</List>
      </Menu>
      <ContentWapper>
        {(() => {
          switch (page) {
            case 'favorite':
              return <MyFavorteComponent />
            case 'myInfo':
              return <MyInfoComponent />
            case 'myRecipe':
              return <MyRecipeComponent />
            default:
          }
        })()}
      </ContentWapper>
    </Wrap>
  )
};

const Wrap = styled.div`
  position: relative; 
  height: 700px;
  display: flex;

  .showM {
    transform: translateX(0);
    animation-duration: 1s;
    animation-name: show;
  }
  @keyframes show{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0);
    }
  }

  ::after {
    display: inline-block ;
    clear: both;
    content: '';
  }
`
const Menu = styled.div`
  z-index: 1;
  left: 0;
  transform: translateX(-100%);


  position: absolute; 
  margin: 0;
  border: 0;
  padding: 0;
  height: 700px;
  width: 20%;
  background-color: green;
  color: white;
`
const Nodiv = styled.div`
  height: 800px;
  width: 20%;
`
const ContentWapper = styled.div`
  margin: 30px;
  width: 80%;
`
const MenuTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  padding: 30px 0;
`
const List = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px 0;

  margin-bottom: 5px;
  :hover {
    background-color: grey;
  }
`
// 초록색의 포지션을 먹인다.
// 화면 밖에서 안으로 오도록 

export default MenuComponent