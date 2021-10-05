import React from 'react'
import styled from "styled-components"

import { FaFacebookSquare, FaPinterestSquare, FaGithub, FaTwitter } from 'react-icons/fa'

const FooterComponent = () => {

  return (
    <Main>
      <footer className='container'>
        <ul className='foote_bottom_ul_amrc'>
          <li><a href='/'>Privacy</a></li>
          <li><a href='/'>Terms&Conditions</a></li>
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Cookie references</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
        <p className='text-center'>Copyright @2021 | Designed by 경기남부연합</p>
        <ul className='social_footer_ul'>
          <li><a href='/'><FaFacebookSquare /></a></li>
          <li><a href='/'><FaPinterestSquare /></a></li>
          <li><a href='/'><FaGithub /></a></li>
          <li><a href='/'><FaTwitter /></a></li>
        </ul>
      </footer>
    </Main>
  )
}

const Main=styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: solid 0.7mm #E7E9EB;
  display: flex;
  justify-content: center; 
  height: 100%;

  p { 
    margin-left: 70px;   
    padding-bottom: 0px; 
    margin-bottom: 4px;
  }
  .foote_bottom_ul_amrc {
	  list-style-type: none;
	  padding: 0px;
	  display: table;
	  margin-top: 5px;
	  margin-right: auto;
	  margin-bottom: 5px;
	  margin-left: auto;
  }
  .foote_bottom_ul_amrc li { 
    display: inline;
  }
  .foote_bottom_ul_amrc li a { 
    color: #4b3add; 
    margin: 0 7px;
  }
  .social_footer_ul { 
    display: table; 
    margin: 15px auto 0 auto; 
    list-style-type: none;  
  }
  
  .social_footer_ul li { 
    padding-left: 20px; 
    padding-top: 10px; 
    float: left; 
  }
  .social_footer_ul li a { 
    color: #1f1818; 
    border: 1px solid #CCC; 
    padding: 8px;
    border-radius: 50%;
  }
  .social_footer_ul li i {  
    width: 20px; 
    height: 20px; 
    text-align: center;
  }
`

export default FooterComponent
