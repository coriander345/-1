import React from 'react'
import GetImagesComponent from '../getImagesComponent'
import {
  Contents,
  TitleWrap,
  Title,
} from '../editMyInfo/editMyInfoCss/editMyInfoCss'
const MyRecipeComponent = (props) => {
  return (
    <Contents>
      <TitleWrap>
        <Title>나의 레시피</Title>
      </TitleWrap>
      <GetImagesComponent />
    </Contents>
  )
}

export default MyRecipeComponent
