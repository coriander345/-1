import React from 'react'
import styled from "styled-components"


const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25%;
    object-fit: cover;
`

const Image = ({url,key}) => {
    return <Img key={key} src={url} alt=""/>
}

export default Image
