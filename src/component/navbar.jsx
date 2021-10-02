import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

import { AuthContext } from "../Context/authContext";
import { UserContext } from "../Context/userContext";

const Navbar = (props) => {
    const history = useHistory();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const {userInfo, setUserInfo} = useContext(UserContext);

    return (
        <nav>
            <NavLink className="logo" to="/" >Pick And Roll</NavLink>
            <div className="nav-links">
                { isLoggedIn ? (
                    <div>
                        <NavLink className="link" to="/recipe">레시피</NavLink>
                        <NavLink className="link" to="/searchModal">검색</NavLink>
                        <NavLink className="link" to="/write">새 글 작성</NavLink>
                        <NavLink className="link" to="/mypage">{userInfo}</NavLink>
                        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>로그아웃</button>
                    </div>
                ) : (
                    <div>
                        <NavLink className="link" to="/recipe">레시피</NavLink> 
                        <NavLink className="link" to="/searchModal">검색</NavLink> 
                        <NavLink className="link" to="/login">로그인</NavLink>
                        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                            {isLoggedIn? 
                            "logout"
                            : 
                            "login"
                            }
                        </button>
                    </div>
                )}
                
            </div>
        </nav>
    )
}

export default Navbar
