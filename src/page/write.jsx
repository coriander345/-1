import React, { useRef, useState, useCallback, useContext } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

import styled from 'styled-components'
import Swal from 'sweetalert2'

import ContentImgComponent from '../component/ImgEncoding/contentImgsComponent'
import MainImgComponent from '../component/ImgEncoding/mainImgComponent'
import AddListContent, {
  AddListingredients,
} from '../component/write/addListComponent'
import DropDownTime, {
  DropDownCategory,
} from '../component/write/dropDownComponent'
import { UserContext } from '../Context/userContext'

const Write = (props) => {
  const history = useHistory()
  const { userInfo, setUserInfo } = useContext(UserContext)

  const [userId, setUserId] = useState(0)
  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [category, setCategory] = useState('')
  const [requiredTime, setRequiredTime] = useState('')
  const [contents, setContents] = useState([' '])
  const [mainImg, setMainImg] = useState('')
  const [contentImgs, setContentImgs] = useState([])
  const [url, setUrl] = useState([])
  const [ingredients, setIngredients] = useState([
    {
      ingredient: '',
      amount: '',
    },
  ])

  // focus 이벤트를 주기 위한 Ref
  const _email = useRef()
  const _pw = useRef()
  const _pwChk = useRef()
  const _nick = useRef()
  const _des = useRef()

  const onChangeUserId = useCallback((event) => {
    setUserId(event.target.value)
  })

  const onChangeTitle = useCallback((event) => {
    setTitle(event.target.value)
  })

  const onChangeIntroduction = useCallback((event) => {
    setIntroduction(event.target.value)
  }, [])

  // 회원가입 버튼
  // const signUp = (event) => {
  //   //preventDefault는 창이 새로 고침되는 것을 막기 위해서
  //   event.preventDefault()

  //   Swal.fire({
  //     title: '회원가입이 완료되었습니다.',
  //     text: `모든 레시피를 확인해보세요! `,
  //     confirmButtonColor: '#d6d6d6',
  //     confirmButtonText: '확인',
  //   })
  //   history.push('/')
  // }
  const getUrl = async (form, idx) => {
    let result
    await axios.post(process.env.REACT_APP_CLOUDINARY_URL, form).then((res) => {
      setUrl([...url, res.data.url])
    })
    return result
  }

  const postInfoSubmit = useCallback(async () => {
    let content = contents.join('@')
    // regex
    let ingred = ingredients.map(
      (el) => `${el.ingredient}` + ',' + `${el.amount}`
    )
    let finalIngredients = ingred.join('@')

    let finalMainImg
    await axios
      .post(process.env.REACT_APP_CLOUDINARY_URL, mainImg)
      .then((res) => {
        console.log(5, res)
        finalMainImg = res.data.url
      })

    let contentUrls = contentImgs.map((el) => {
      const form = new FormData()
      form.append('file', el)
      form.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET_CONTENT)
      form.append('name', 'hi')
      return form
    })

    let finalContentUrl = contentUrls.map(async (el, idx) => {
      return await getUrl(el, idx)
    })
    //promise

    finalContentUrl = url.join(',')
    console.log(url)

    console.log({
      UserId: userInfo.email,
      Title: title,
      Introduction: introduction,
      Category: category,
      RequiredTime: requiredTime,
      Content: content,
      MainImg: finalMainImg,
      ContentImgs: finalContentUrl,
      Ingredients: finalIngredients,
    })
    // await axios.post('https://localhost:4000/posts/write', {
    //     UserId: userInfo.email,
    // Title: title,
    // Introduction: introduction,
    // Category: category,
    // RequiredTime: requiredTime ,
    // Content: content,
    // MainImg: finalMainImg,
    // ContentImgs: finalContentUrl,
    // Ingredients: finalIngredients
    // }, {
    //     'Content-Type' : 'application/json'
    // })
  })

  return (
    <>
      <Wrapper>
        <TitleArea>
          <Title>레시피 작성</Title>
          <MainText> 본인 만의 노하우가 담긴 비법을 전수해주세요. </MainText>
        </TitleArea>
        <Form>
          <FormGroup>
            <Labal>
              <span className="require">1.</span> &nbsp; 제목
            </Labal>
            <Input
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={(e) => onChangeTitle(e)}
              ref={_email}
            />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">2.</span>&nbsp; 요리소개
            </Labal>
            <Textarea
              type="text"
              placeholder="요리에 특별한 사연이 있다면 알려주세요!"
              onChange={(e) => onChangeIntroduction(e)}
              ref={_pw}
            />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">3.</span>&nbsp; 메인 사진
            </Labal>
            <MainImgComponent
              className="imgBox"
              mainImg={mainImg}
              setMainImg={setMainImg}
            />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">4.</span>&nbsp; 레시피 카테고리
            </Labal>
            <DropDownCategory category={category} setCategory={setCategory} />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">5.</span>&nbsp; 조리시간
            </Labal>
            <DropDownTime
              requiredTime={requiredTime}
              setRequiredTime={setRequiredTime}
            />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">6.</span>&nbsp; 요리 재료
            </Labal>
            <AddListingredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">7.</span>&nbsp; 요리 방법
            </Labal>
            <AddListContent
              contents={contents}
              setContents={setContents}
            ></AddListContent>
          </FormGroup>
          <FormGroup>
            <Labal>
              <span className="require">8.</span>&nbsp; 요리 사진
            </Labal>
            <ContentImgComponent
              contentImgs={contentImgs}
              setContentImgs={setContentImgs}
            ></ContentImgComponent>
          </FormGroup>
          <FormGroup>
            <SignupBtn onClick={() => postInfoSubmit()}>등록하기</SignupBtn>
          </FormGroup>
        </Form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TitleArea = styled.div`
  width: 360px;
  margin: 50px auto 30px;
  font-size: 30px;
`

const Title = styled.div`
  width: 360px;
  height: 42px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: rgb(77, 77, 77);
`
const MainText = styled.div`
  text-align: center;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 10px;
  color: rgb(255, 162, 0);
`

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: -6%;
  padding: 25px 0px;
`

const FormGroup = styled.div`
  display: block;
  margin-left: 13%;
  text-align: center;
  /* width: 80%;
  height: 80%; */
`
const CheckText = styled.div`
  height: 3px;
  text-align: left;
  font-size: 11px;
  margin-left: 5px;
  margin-top: 3px;
  color: rgb(255, 162, 0);
`

const Labal = styled.div`
  text-align: left;
  margin-left: 4px;
  margin-bottom: 3px;
  .require {
    color: rgb(255, 162, 0);
    margin-left: 4px;
    line-height: 2;
  }
`

const Input = styled.input`
  width: 300px;
  height: 15px;
  align-items: center;
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

export const SignupBtn = styled.button`
  width: 300px;
  text-align: center;
  align-items: center;
  padding: 0px 0px;
  background-color: rgb(243, 200, 18);
  height: 50px;
  border: 1px solid transparent;
  border-radius: 13px;
  color: white;
  font-size: 17px;
`
const Textarea = styled.textarea`
  width: 400px;
  height: 120px;
  align-items: center;
  padding: 5px 10px 10px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  resize: none;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 20px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`
export default Write
