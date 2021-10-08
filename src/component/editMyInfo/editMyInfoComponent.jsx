import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import {
  Card,
  NameText,
  Input,
  NameButton,
  BottomWrap,
  BottomContent,
  Fixed,
  DescriptionButton,
} from './editMyInfoCss/editMyInfoCss'

import { UserContext } from '../../Context/userContext'

const EditMyInfoComponent = () => {
  const [changeNickname, setChangeNickname] = useState('')
  const [changeDescription, setChangeDescription] = useState('자기소개 입니다.')

  const { userInfo, setUserInfo } = useContext(UserContext)
  const { id, email, createdAt } = userInfo
  // 닉네임 유효성 감사
  const nickname_Reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/

  // const getUserInfo = async () => {
  //   await axios.get(`https://localhost:4000/users/${}`, {
  //     withCredentials: true
  //   })
  //   .then((res) => {
  //     console.log('res : ', res)
  //     const { id, email, name, description, createdAt } = res.data.data.userData
  //     setUserInfo({ id, email, name, description, createdAt })
  //   })
  // }
  // 로그인 상태에서 회원정보 수정하면, 현재 userinfo와 서버의 회원정보 업데이트를 업데이트 해야한다.
  // usecontext로 현재 상태를 바꿔주고
  // axios를 통해서 회원정보를 업데이트 한다.

  // axios를 통해 이미 등록된 닉네임인지 체크
  const checkNickname = () => {
    if (!nickname_Reg.test(changeNickname) || changeNickname === '') {
      Swal.fire({
        title: '닉네임을 다시 정해주세요',
        text: '닉네임은 한글, 영문, 숫자만 가능하며 2-10자리까지 가능합니다!',
        icon: 'warning',
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#e8b229',
      })
      return
    }
    Swal.fire({
      title: '사용할 수 있는 닉네임입니다. ',
      icon: 'success',
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '확인',
      confirmButtonColor: '#e8b229',
      //useContext로 바꾸기
    })
  }

  const editDone = () => {
    setUserInfo({
      id,
      email,
      createdAt,
      name: changeNickname,
      description: changeDescription,
    })
    console.log(userInfo)

    Swal.fire({
      title: '정보가 수정되었습니다.',
      icon: 'success',
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '확인',
      confirmButtonColor: '#e8b229',
      //useContext로 바꾸기
    })
  }

  return (
    <Wrap>
      <NameArea>
        <Name>새로운 닉네임</Name>
        <NameInput
          onChange={(e) => {
            setChangeNickname(e.target.value)
          }}
        />
        <CheckBtn onClick={checkNickname}>확인</CheckBtn>
      </NameArea>
      <IntroArea>
        <Name>자기 소개</Name>
        <Textarea
          onChange={(e) => {
            setChangeDescription(e.target.value)
          }}
          placeholder="자기소개를 입력해주세요."
        />
      </IntroArea>
      <BottomArea>
        <DateArea>
          <DateP>활동 시작일</DateP>
          <Data>2021-07-01</Data>
        </DateArea>
        <EmailArea>
          <EmailP>이메일</EmailP>
          <Data>qwert@abc.com</Data>
        </EmailArea>
        <CheckBtn onClick={editDone}>수정 완료</CheckBtn>
      </BottomArea>
    </Wrap>
  )
}

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const NameArea = styled.div`
  text-align: center;
`
const Name = styled.h3`
  margin: 5px 0;
  width: 100%;
  color: #616161;
`
const NameInput = styled.input`
  width: 60%;
  margin: 5px 0 0 0;
  padding: 0;
  border: solid 2px #d2d2d2;
  border-radius: 5px;
`
const CheckBtn = styled.button`
  margin-top: 10px;
  width: 60%;
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
const IntroArea = styled.div`
  margin: 15px 0;
  text-align: center;
`
const Textarea = styled.textarea`
  resize: none;
  width: 95%;
  height: 130px;
  padding: 5px;
  border: solid 2px #d2d2d2;
`
const DateArea = styled.div`
  text-align: center;
  margin-top: 10px;
`
const DateP = styled.h4`
  margin: 3px 0;
  color: #616161;
`
const EmailP = styled.h4`
  margin: 3px 0;
  color: #616161;
`
const Data = styled.p`
  margin: 0 auto;
  border: solid 2px #d2d2d2;
  border-radius: 3px;
  width: 80%;
`
const EmailArea = styled.div`
  margin-top: 10px;
  text-align: center;
`
const BottomArea = styled.div`
  text-align: center;
`

export default EditMyInfoComponent
