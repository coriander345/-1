import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { UserContext } from '../../Context/userContext'

const MyInfoComponent = (props) => {

  const { userInfo, setUserInfo } = useContext(UserContext)

  // const getUserInfo = async () => {
  //   await axios.get('https://localhost:4000/users/:id', {
  //     headers: {
  //       Authorization: `Bearer ${}`,
  //       'Content-Type': 'application/json'
  //     },
  //     withCredentials: true
  //   })
  //   .then((res) => {
  //     if (res.data.message !== 'ok'){
  //       const message = 'accessToken 만료'
  //       return
  //     }
  //     const { id, email, name, description, createdAt } = res.data.data.userData;
  //     setUserInfo({ id, email, name, description, createdAt })
  //   })
  // }
  return (
    <Contents>
      <Title>나의 정보</Title>
      <Info>
        <Profile></Profile>
        <Card>
          <Name>{userInfo.name}</Name>
          <Description>
            {userInfo.description}
          </Description>
          <BottomContents>
            <CreateDate>활동 시작일<br />{userInfo.createdAt}</CreateDate>
            <Email>이메일<br />{userInfo.email}</Email>
          </BottomContents>
        </Card>
      </Info>
    </Contents>
  )
}

const Contents = styled.div`
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Title = styled.div`
  align-items: center;
  text-align: center;
  border: solid 1px;
  margin: 5px 300px;
  font-size: 20px;
  border-radius: 15px;
  height: 30px;
  padding-top: 6px;
`

const Info = styled.div`
  height: 300px;
  margin: 30px 100px;
  display: flex;
  box-shadow: 10px 10px 20px #606060;
`

const Profile = styled.div`
  width: 20%;
  background-color: rgb(32, 145, 28);

`
const Card = styled.div`
  width: 80%;
  padding: 30px 20px 20px 50px;
`

const Name = styled.div`
  font-size: 25px;
  padding-bottom: 50px;
`

const Description = styled.div`
  padding-bottom: 50px;
`

const BottomContents = styled.div`
  display: flex;
`

const CreateDate = styled.div`
  width: 30%;
  padding: 20px;
`

const Email = styled.div`
  padding: 20px;
  width: 70%;
`

export default MyInfoComponent