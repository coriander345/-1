import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../Context/authContext'
import { UserContext } from '../Context/userContext'
import LoginFormModal from './modal/loginFromModal'
import SearchBoxModal from './modal/searchBoxModal'

const NavbarComponent = ({ handleLogin, handleLogout }) => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
	const { userInfo, setUserInfo } = useContext(UserContext);
  const [openLogin, setOpenLogin] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)

	const logout = async () => {
		await axios.post('https://localhost:4000/users/logout')
		.then((res) => {	
      handleLogout()
      setOpenLogin(false)
		})
	}

  return (
    <nav>
      { !isLoggedIn ? (
        <div className='beforeLoginView'>
          <NavLink className='logo' to='/'>Pick & Roll</NavLink>
          <div className='nav-links'> 
          <button className='testbtn' onClick={() => setIsLoggedIn(!isLoggedIn)}>test</button>
          <NavLink className='link' to='/recipe'>레시피</NavLink> 
          <div className='link' onClick={() => setShowSearchBox(true)}>검색</div> 
          <SearchBoxModal showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
          <div className='link' to='/' onClick={()=> setOpenLogin(true)}>로그인</div> 
          { openLogin ? <LoginFormModal handleLogin={handleLogin} openLogin={openLogin} setOpenLogin={setOpenLogin} /> : null }
          </div>
        </div>
			) : (
				<div className='afterLoginView'>
					<NavLink className='logo' to='/'>Pick & Roll</NavLink>
					<div className='nav-links'> 
					<button className='testbtn' onClick={() => setIsLoggedIn(!isLoggedIn)}>test</button>
					<NavLink className='link' to='/recipe'>레시피</NavLink> 
					<div className='link' onClick={()=> setShowSearchBox(true)} >검색</div> 
					<SearchBoxModal showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
					<NavLink className='link' to='/postwrite'>새 글 작성</NavLink>
					<NavLink className='link' to={`/mypage/${userInfo.email}`}>{userInfo.name}</NavLink> 
					<NavLink className='link' to='/' onClick={logout}>로그아웃</NavLink>
					</div>
				</div>
			)}
    </nav>
  )
}

export default NavbarComponent


