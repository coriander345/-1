import React from 'react'
import styled from 'styled-components'

const MyRecipeComponent = (props) => {

  return (
    <Contents>
      <Title>나의 레시피</Title>
    </Contents>
  )
}

const Contents = styled.div`
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Title = styled.div`
  align-items: center;
  text-align: center;
  border: solid 1px;
  margin: 5px 300px;
  font-size: 20px;
  border-radius: 15px;
  height: 30px;
  padding-top: 6px;
`

export default MyRecipeComponent