import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// import { FaSearch } from 'react-icons/fa'

import { SearchValueContext } from '../../Context/searchValueContext'
import { AuthContext } from '../../Context/authContext'

const SearchBoxModal = ({showSearchBox,setShowSearchBox}) => {
  
  const history = useHistory()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const {isValue, setIsValue} = useContext(SearchValueContext)
  const [inputValue, setInputValue] = useState('')
  
  const SearchRedirect = (e) => {
    if(e.type === 'click') {
      setShowSearchBox(false)     
      history.push(`/search/${inputValue}`)
      setIsValue(inputValue)
      setInputValue('')
      return 
    }

    if (e.key === 'Enter') {
      setShowSearchBox(false)
      history.push(`/search/${inputValue}`)
      setIsValue(inputValue)
      setInputValue('')
    }
  }
  
  return (
    <>
      <Wrapper onSubmit={SearchRedirect}>
        <div className={showSearchBox?"Background":null} onClick={()=> setShowSearchBox(false)}></div>
        <div className={showSearchBox? "opened" : "modal"} aria-hidden="true">
          <div className="modal-dialog">
            <button onClick={()=> setShowSearchBox(false)} aria-hidden="true">&times;</button>
                    
            <div className="modal-body">
              <input 
                type="text" 
                placeholder="검색"
                name="u" 
                size="20"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                onKeyPress={(e)=>SearchRedirect(e)} 
              />     
              {/* <FaSearch type="submit" onClick={SearchRedirect}/> */}
              <br />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
} 

const Wrapper = styled.div`
  .Background{
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .modal:before {
    content: "";
    display: none;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  .opened:before {
    display: block;
  }

  .opened .modal-dialog {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    top: 20%;
  }

  .modal-dialog {
    background: #fefefe;
    border: #333333 solid 0px;
    border-radius: 5px;
    margin-left: -200px;
    text-align:center;
    position: fixed;
    left: 50%;
    top: -100%;
    z-index: 11;
    width: 360px;
    box-shadow:0 5px 10px rgba(0,0,0,0.3);
    -webkit-transform: translate(0, -500%);
    -ms-transform: translate(0, -500%);
    transform: translate(0, -500%);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-body input{
    width:200px;
    padding:8px;
    color:#888;
    outline:0;
    font-size:14px;
    font-weight:bold;
    border:none;
    border-right:0px; 
    border-top:0px; 
  }
`

export default SearchBoxModal
