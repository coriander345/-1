import React from 'react'
import GetImagesComponent from '../getImagesComponent'
import {Contents, TitleWrap, Title} from '../editMyInfo/editMyInfoCss/editMyInfoCss'

const MyFavorteComponent = (props) => {


  return (
    <Contents>
      <TitleWrap><Title>즐겨찾기</Title></TitleWrap>
      <GetImagesComponent />
    </Contents>
  )
}

export default MyFavorteComponent;