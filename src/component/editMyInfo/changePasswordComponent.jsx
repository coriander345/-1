import React, { useState, useContext, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { UserContext } from '../../Context/userContext'
import {
  Card,
  NameText,
  Input,
  NameButton,
} from './editMyInfoCss/editMyInfoCss'
const ChangePasswordComponent = () => {
  const [password, setPassword] = useState('')
  const [pwCheck, setPwCheck] = useState('')

  const { userInfo, setUserInfo } = useContext(UserContext)

  const [messagePassword, setMessagePassword] = useState('')
  const [messagePwCheck, setMessagePwCheck] = useState('')

  const history = useHistory()

  const password_Reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/

  const { email, name, description } = userInfo

  const _pw = useRef()
  const _pwChk = useRef()

  const checkPassWord = () => {
    if (!password_Reg.test(password)) {
      setMessagePassword(
        '(8~15자) 영문 대소문자/숫자/특수문자 모두 포함해야합니다!'
      )
      return
    }
    setMessagePassword('✔ 사용 가능한 비밀번호입니다!')
  }

  // 비밀번호 확인을 체크하기 위한 함수
  const doubleCheckPassWord = () => {
    if (password === '') {
      setMessagePassword('비밀번호를 먼저 입력해주세요!')
    } else if (password !== '' && !pwCheck) setMessagePwCheck('')
    else if (password !== pwCheck || !password_Reg.test(password))
      setMessagePwCheck('비밀번호를 다시 확인해주세요!')
    else if (password === pwCheck && password_Reg.test(password))
      setMessagePwCheck('✔ 비밀번호가 확인되었습니다!')
  }
  const changePw = async () => {
    if (password === '' || !password_Reg.test(password)) {
      _pw.current.focus()
      setMessagePassword(
        '(8~15자) 영문 대소문자/숫자/특수문자 모두 포함해야합니다!'
      )
      return
    } else if (pwCheck === '' || password !== pwCheck) {
      _pwChk.current.focus()
      setMessagePwCheck('비밀번호를 다시 확인해주세요!')
      return
    }
    await axios
      .post(
        'https://localhost:4000/users/signUp',
        {
          email,
          password,
          name,
          description,
        },
        {
          'Content-Type': 'application/json',
        }
      )
      .then((res) => {
        console.log(res)
      })
    // 현재 회원정보도 업데이트?
    setUserInfo({
      password: password,
    })
    history.push('/mypage')
  }

  return (
    <Wrap>
      <NameArea>
        <Name>새로운 비밀번호를 입력하세요.</Name>
        <NameInput
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          ref={_pw}
        />
        <CheckText>{messagePassword}</CheckText>
        <CheckBtn onClick={checkPassWord}>확인</CheckBtn>
      </NameArea>
      <NameArea>
        <Name>비밀번호를 다시 입력해주세요.</Name>
        <NameInput
          type="password"
          onChange={(e) => {
            setPwCheck(e.target.value)
          }}
          ref={_pwChk}
        />
        <CheckText>{messagePwCheck}</CheckText>
        <CheckBtn onClick={doubleCheckPassWord}>확인</CheckBtn>
        <ChangeBtn onClick={changePw}> 변경 완료</ChangeBtn>
      </NameArea>
    </Wrap>
  )
}

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const NameArea = styled.div`
  margin: 20px 0;
  text-align: center;
`
const Name = styled.h3`
  color: #616161;
  margin: 5px 0;
  width: 100%;
`
const NameInput = styled.input`
  width: 80%;
  margin: 5px 0 3px 0;
  padding: 3px;
  border: solid 2px #d2d2d2;
  border-radius: 5px;
`
const CheckBtn = styled.button`
  margin-top: 6px;
  width: 80%;
  height: 20px;
  border: 0;
  color: white;
  border-radius: 10px;
  background-color: rgb(243, 200, 18);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  :hover {
    font-weight: bold;
    background-color: rgb(249, 213, 54);
  }
`

const CheckText = styled.p`
  height: 20px;
  text-align: left;
  font-size: 11px;
  margin: 0 0 0 26px;
  color: rgb(255, 162, 0);
`

const ChangeBtn = styled.button`
  font-size : 17px;
  margin-top: 50px;
  width: 80%;
  height: 35px;
  border: 0;
  color: white;
  border-radius: 10px;
  background-color: rgb(162, 162, 162);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  :hover {
    font-weight: bold;
    background-color: rgb(249, 213, 54);
  }
`

export default ChangePasswordComponent
