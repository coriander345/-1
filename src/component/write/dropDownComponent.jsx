import React, { useCallback } from 'react'
import styled from 'styled-components'

const DropDownTime = ({requiredTime, setRequiredTime}) => {
  
  const onChangeRequiredTime = useCallback((event) => {
    setRequiredTime(event.target.value)
  })

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="조리시간"
        onChange={(e) => onChangeRequiredTime(e)}
        value={requiredTime}
      />
      <select onChange={(e) => onChangeRequiredTime(e)}>
        <option value="30분">
          30분
        </option>
        <option value="1시간">1시간</option>
        <option value="2시간">2시간</option>
        <option value="3시간 이상">3시간 이상</option>
      </select>
    </Wrapper>
  )
}


export const DropDownCategory = ({category, setCategory}) => {

  const onChangeCategory = useCallback((event) => {
    setCategory(event.target.value)
  }, [])

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="카테고리"
        onChange={(e) => onChangeCategory(e)}
        value={category}
      />
      <select onChange={(e) => onChangeCategory(e)}>
      <option value='ㅇㅇ'></option>
        <option value='한식'>한식</option>
        <option value='중식'>중식</option>
        <option value='일식'>일식</option>
        <option value='양식'>양식</option>
        <option value='기타'>기타</option>
      </select>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 150px;
  height: 30px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  resize: none;
  margin-left: 25%;
  input {
    height: 80%;
    width: 100%;
    margin-left: 7px;
    margin-top:3px;
    outline: none;
    text-align: center;
    border: 0mm #f7f4f41c;
  }

  select {
    margin-left: 15px;
    border: 0mm #f7f4f41c;
    width: 50%;
    height: 100%;
    text-align: center;
    outline: none;
  }
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
`
export default DropDownTime


