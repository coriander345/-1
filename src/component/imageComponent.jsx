import React from 'react'
import styled from "styled-components"

const ImageComponent = ({ url, key, isMouseOn }) => {

  return (
    <>
      {isMouseOn ?
        <BackImg
          key={key}
          className="drakness"
          style={{ "backgroundImage": `url(${url})` }}>
          <span>레시피정보</span>
        </BackImg> :
        <Img
          key={key}
          className="drakness"
          style={{ "backgroundImage": `url(${url})` }}>
        </Img>}
    </>
  )
}

const Img = styled.div`
   
  width: 100%;
  height: 100%;
  border-radius: 15%;
  object-fit: cover;
  border:solid 0.4mm #a89f9f;
  background-size:100% 100%;
  background-repeat: no-repeat;
`

const BackImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15%;
  object-fit: cover;
    /* border:solid 0.4mm #a89f9f; */
  background-size:100% 100%;
  transition:all .6s linear;
  background-repeat: no-repeat;
  opacity:0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default ImageComponent
