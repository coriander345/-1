import axios from 'axios';
import React, { useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import styled from "styled-components";
import Swal from 'sweetalert2';

const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { Kakao } = window;

    const history = useHistory();
    function test () {

        Kakao.Auth.login({
            redirectUri : 'http://localhost:3000/login',
            scope : 'account_email, profile_nickname',
            success : function(authObj) {
                console.log(authObj);
                let code = new URL(window.location.href).searchParams.get("code");
                console.log(code)
                // Kakao.API.request({
                //     url : '/v2/uesr/me',
                //     success : res => {
                //         console.log(res)
                //         const kakao_account = res.kakao_account
                //         console.log(kakao_account);
                //     }
                // })
            }
        })
    }

    
    const onChangeEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, []);

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value)
    }, []);

    const onSubmitForm = useCallback(async (event) => {
        if (email === "" || password === "") {
            Swal.fire({
                text: `이메일과 비밀번호를 모두 입력해주세요!`,
                icon : "warning",
                confirmButtonColor: "#d2d2d2",
                confirmButtonText: "확인",
            })
        }
        else {
            await axios.post('https://localhost:4000/users/signIn', {
                email : email,
                password: password
            }, {
                "Content-Type": "application/json"
            }, {
                withCredentials: true
            })
            .then((res) => {
                props.handleLogin(res.data);
            })
        }
        event.preventDefault();
    }, [email, password])

    return (
        <Form>
            <Login>Login</Login>
            <LoginC>
                <InputC>
                <Input 
                type="text" 
                placeholder="이메일을 입력해주세요" 
                value={email} 
                onChange={onChangeEmail} 
                />
                </InputC>
                <InputC>
                <Input 
                type="password"
                placeholder="비밀번호를 입력해주세요" 
                value={password} 
                onChange={onChangePassword}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                    onSubmitForm(event)
                    }
                }}
                />
                </InputC>

                <LoginBtn onClick={onSubmitForm}
                >Login
                </LoginBtn>
                <SignUpBtn>
                    <p>회원가입을 원하시나요?</p>
                    <div
                    className="makeaccount"
                    onClick={() => {
                        history.push("/signup");
                    }}
                    >
                    Sign Up
                    </div>
                </SignUpBtn>
                <SocialLoginBtn onClick={test} >
                    kakao
                </SocialLoginBtn>
            </LoginC>
        </Form>
    )
};



const Form = styled.div`
    padding-top: 60px;
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    
`
const LoginC = styled.div`
    width : 500px;
    height : 480px;
    display : flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    padding: 25px 0px;
`
const Login = styled.div`
    text-align : center;
    font-size :32px;
    margin-bottom : 30px;
`
const InputC =styled.div`
    margin-top : 15px;
    text-align : center;
`
const Input = styled.input`
    width: 200px;
    height: 15px;
    align-items : center;
    padding: 15px 50px 10px 10px;  
    border-radius: 8px;
    border: solid 2px #d2d2d2;

    :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
    }
    ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
    }
`
const LoginBtn = styled.div`
    width : 250px;
    text-align : center;
    padding : 15px 0px;
    background-color : #d2d2d2;
    margin-top : 30px;
    width : 265px;
    height : 15px;
    border-radius: 15px;
    color : white;

    :hover {
    font-weight: bold;
    background-color:rgb(243, 200, 18);
    }
`
const SocialLoginBtn = styled.div`
    width : 250px;
    text-align : center;
    padding : 15px 0px;
    background-color : #17a717;
    margin-top : 30px;
    width : 265px;
    height : 15px;
    border-radius: 15px;
    color : white;

    :hover {
    font-weight: bold;
    /* background-color:rgb(243, 200, 18); */
    }

`
const SignUpBtn = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color : #3f3f3f;
    font-size: 13px;
    .makeaccount {
    margin: 0 10px;
    font-size: 15px;
    line-height: 2;
    text-align: left;
    color: rgb(237, 199, 32);
    cursor: pointer;
    :hover {
        font-weight: bold;
    }
    }
`


export default LoginForm;