import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'

function GetImagesComponent ({ isValue, selectCategory  }) {

  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isMouseOn, setIsMouseOn] = useState(false)

  // 받아온 selectCategory(korean)을 통해서
  // axios 요청으로 카테고리를 전송 
  // const categoryFilter = () => {
  //   axios.get(`https://localhost:4000/recipe/:${selectCategory}`)
  //   .then(res => {
  //   })
  // }


  //   &page=${pageNumber}&per_page=10
  const fetchImages = () => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=dllapZyq7HTMkM11dE1uhoBRzwWNupievUHo1BM2Nq8&count=10`)
      .then(res => {
        setImages(photo => [...photo, ...res.data])
        setPageNumber(pageNumber + 1)
      })
      
  }

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div>
      <GlobalStyle>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<LoadingComponent />}
        >
          <WrapperImage >
          { images.map(image => (
            <div className='img-wrapper' key={image.id}
              onMouseEnter={() => setIsMouseOn(true)}
              onMouseLeave={() => setIsMouseOn(false)} 
            >
            <ImageComponent 
              isMouseOn={isMouseOn}
              url={image.urls.thumb} 
            /> 
            
              <div className="btn-plus"><span draggable="false">레시피 정보</span></div>
            </div>
          ))}
          </WrapperImage>
        </InfiniteScroll>
      </GlobalStyle>
    </div>
  );
}

const GlobalStyle = styled.div`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
  }
`

const WrapperImage = styled.section`

  max-width: 70rem;
  margin: 3rem 7rem;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  
   .img-wrapper{
      object-fit: cover;
      border-radius: 25%;
      cursor:pointer;
    }
    .darkness {
      background-size: 100px 100px;
      opacity:0;
      transition:all .6s linear;
      visibility: hidden;
      }
    .btn-plus {
      background:red;
      border-radius:50%;
      text-align:center;
      opacity:0;   
      transform:scaleY(1);
      transition:all .3s linear;
      }   
    .img-wrapper:hover .darkness{
      transform:scale(3);
    }
    .img-wrapper:hover .btn-plus {
      opacity:1;
      transform:scale(1);
    } 
`

export default GetImagesComponent;

