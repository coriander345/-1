import styled from 'styled-components'

const Contents = styled.div`
  flex-direction: column;
  margin: 0;
  padding: 0;
`
const TitleWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  width: 200px;
  align-items: center;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 5px 300px;
  font-size: 20px;
  font-weight: 900;
  height: 30px;
  padding-top: 6px;
  color: #4f4f4f;
`

const Info = styled.div`
  height: 450px;
  width: 600px;
  margin: 30px auto;
  display: flex;
  box-shadow: 0px 1px 10px 1px rgb(201, 201, 201);

  @media (max-width: 1200px) {
    width: 90%;
    height: 500px;
    padding : 0;
    box-sizing: border-box;
  }
`

const Profile = styled.div`
  width: 20%;
  background-color: rgb(32, 145, 28);

  @media (max-width: 1200px) {
    display: none;
  }
`
const Card = styled.div`
  width: 60%;
  padding: 30px 20px 20px 50px;
  @media (max-width: 1200px) {
    padding: 10px;
  }
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`
const NameText = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  margin-top: 1px;
  white-space: nowrap;
  @media (max-width: 1200px) {
    width: 30%;
  }
`
const NameButton = styled.button`
  width: 60px;
  height: 21px;
  margin-left: 10px;
  margin-top: 2px;
  text-decoration: none;
  border: solid 1px rgb(147, 147, 147);
  background-color: white;
  color: rgb(147, 147, 147);
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgb(243, 200, 18) 0 80px 0px 2px inset;
    border: solid 1px rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
    width: 20%;
    white-space: nowrap;
  }
`
const DescriptionButton = styled.button`
  width: 80px;
  height: 21px;
  margin-left: 3px;

  text-decoration: none;
  border: solid 1px rgb(147, 147, 147);
  background-color: white;
  color: rgb(147, 147, 147);
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgb(243, 200, 18) 0 80px 0px 2px inset;
    border: solid 1px rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
    order: 1;
    margin-left: 243px;
  }
`
const Fixed = styled.div`
  width: 150px;
  height: 23px;
  align-items: center;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  margin-left: 10px;
  display: flex;
  padding-left: 10px;
  text-align: center;
`
const Description = styled.div`
  padding-bottom: 5px;
`

const BottomWrap = styled.div`
  display: flex;
  margin : 15px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

const BottomContent = styled.div`
  width : 75px;
  margin-top : 5px;
  @media (max-width: 1200px) {
    width: 100%;
    order: 2;
  }
`

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  position: absolute;
  margin-left: 445px;
  @media (max-width: 1200px) {
    padding: 2px 10px 0 0;
    width: 40%;
    height: 80px;
    margin-left : 230px;
  }
`

const ReviseForm = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row-reverse;
  :hover .fixed {
    display: block;
  }
  @media (max-width: 1200px) {
    width: 140px;
    margin-top: 7px;
  }
`

const ReviseBtn = styled.div`
  display: flex;
  font-size: 20px;
  :hover {
    color: rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
    margin-right: 10px;
  }
`

const ReviseText = styled.div`
  font-size: 11px;
  margin-right: 10px;
  margin-top : 5px;
  display: none;
  color: rgb(243, 200, 18);
`

const Input = styled.input`
  width: 150px;
  height: 11px;
  align-items: center;
  padding: 5px 20px 5px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  margin-left: 10px;
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
  @media (max-width: 1200px) {
    width: 50%;
  }
`

const Textarea = styled.textarea`
  width: 273px;
  height: 70px;
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
    font-size: 13px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
`
const NoTextarea = styled.div`
  width: 273px;
  height: 70px;
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
    font-size: 13px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
`
export { Contents,
  TitleWrap, 
  Title, 
  Info, 
  Profile, 
  Card, 
  Name,
  NameText, 
  NameButton, 
  DescriptionButton,
  Fixed,
  Description,
  BottomWrap,
  BottomContent,
  BtnWrap,
  ReviseForm,
  ReviseBtn,
  ReviseText,
  Input,
  Textarea,
  NoTextarea
};