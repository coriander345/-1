import React, {useState,useEffect, useCallback} from 'react'
import Category from '../component/category/category'
import GetImagesComponent from "../component/getImagesComponent"

const Recipe = () => {
const [selectCategory, setSelectCateogry] = useState('')
const [selected, setSelected] = useState('최신')
console.log("recipe : ", selected)
console.log("recipe : ",selectCategory)
  return (
  <>
    <Category selected={selected} setSelected={setSelected} setSelectCateogry={setSelectCateogry} />
    <GetImagesComponent selectCategory={selectCategory} />
    
  </>
  )
}

export default Recipe
