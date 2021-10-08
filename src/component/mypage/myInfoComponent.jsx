import React, { useState, useContext } from 'react'
import {
  Contents,
  TitleWrap,
  Title,
  Info,
  Profile,
  BtnWrap,
  ReviseForm,
  ReviseBtn,
  ReviseText,
} from '../editMyInfo/editMyInfoCss/editMyInfoCss'
import { FaMarker, FaKey, FaCog } from 'react-icons/fa'
import axios from 'axios'
import { UserContext } from '../../Context/userContext'
import PasswordModal from '../modal/passwordModal'
import ChangePasswordComponent from '../editMyInfo/changePasswordComponent'
import EditMyInfoComponent from '../editMyInfo/editMyInfoComponent'
import ShowInfoComponent from '../editMyInfo/showInfoComponent'

const MyInfoComponent = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [pwModal, setPwModal] = useState(false)
  const [page, setPage] = useState('showInfo')

  // 컴포넌트 변경을 위한 함수
  const changeInfo = () => setPage('showInfo')
  const changeEdit = () => setPage('EditInfo')

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

  return (
    <Contents>
      <TitleWrap>
        <Title onClick={changeInfo}>나의 정보</Title>
      </TitleWrap>
      <Info>
        {/* <Profile></Profile> */}
        {(() => {
          switch (page) {
            case 'showInfo':
              return <ShowInfoComponent userInfo={userInfo} />
            case 'EditInfo':
              return <EditMyInfoComponent userInfo={userInfo} />
            case 'changePassword':
              return <ChangePasswordComponent />
            default:
          }
        })()}
        <BtnWrap>
          <ReviseForm>
            <ReviseBtn>
              <ReviseText className="fixed">사용자정보 수정</ReviseText>
              <FaCog onClick={changeEdit} />
            </ReviseBtn>
          </ReviseForm>
          <ReviseForm>
            <ReviseBtn>
              <FaKey onClick={() => setPwModal(!pwModal)} />
            </ReviseBtn>
            {pwModal ? (
              <PasswordModal setPage={setPage} setPwModal={setPwModal} />
            ) : null}
            <ReviseText className="fixed">비밀번호 수정</ReviseText>
          </ReviseForm>
        </BtnWrap>
      </Info>
    </Contents>
  )
}

export default MyInfoComponent
