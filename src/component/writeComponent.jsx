import React, { useCallback, useState } from 'react';
import axios from 'axios';

const WriteComponent = () => {
    const [userId, setUserId] = useState(0);
    const [title, setTitle] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [category, setCategory] = useState('');
    const [requiredTime, setRequiredTime] = useState('');
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [mainImg, setMainImg] = useState('');
    const [contentImg1, setContentImg1] = useState('');
    const [contentImg2, setContentImg2] = useState('');
    const [ingredients1, setIngredients1] = useState('');
    const [amount1, setAmount1] = useState('');
    const [ingredients2, setIngredients2] = useState('');
    const [amount2, setAmount2] = useState('');

    const onChangeUserId = useCallback((event) => {
        setUserId(event.target.value);
    }, []);

    const onChangeTitle = useCallback((event) => {
        setTitle(event.target.value);
    }, []);

    const onChangeIntroduction = useCallback((event) => {
        setIntroduction(event.target.value);
    }, []);

    const onChangeCategory = useCallback((event) => {
        setCategory(event.target.value);
    }, []);

    const onChangeRequiredTime = useCallback((event) => {
        setRequiredTime(event.target.value);
    }, []);

    const onChangeContent1 = useCallback((event) => {
        setContent1(event.target.value);
    }, []);

    const onChangeContent2 = useCallback((event) => {
        setContent2(event.target.value);
    }, []);

    const onChangeMainImg = useCallback((event) => {
        setMainImg(event.target.value);
    }, []);

    const onChangeContentImg1 = useCallback((event) => {
        setContentImg1(event.target.value);
    }, []);

    const onChangeContentImg2 = useCallback((event) => {
        setContentImg2(event.target.value);
    }, []);

    const onChangeIngredients1 = useCallback((event) => {
        setIngredients1(event.target.value);
    }, []);

    const onChangeAmount1 = useCallback((event) => {
        setAmount1(event.target.value);
    }, []);

    const onChangeIngredients2 = useCallback((event) => {
        setIngredients2(event.target.value);
    }, []);

    const onChangeAmount2 = useCallback((event) => {
        setAmount2(event.target.value);
    }, []);

    const postInfoSubmit = useCallback(async () => {

        let content = [content1, content2].join('@');
        let contentImgs = [contentImg1, contentImg2].join(',');
        let ing1 = [ingredients1, amount1].join(',');
        let ing2 = [ingredients2, amount2].join(',');
        let ingredients = [ing1, ing2].join('@');

        await axios.post('https://localhost:4000/posts/write', {
            userId,
            title,
            introduction,
            category,
            requiredTime,
            content,
            mainImg,
            contentImgs,
            ingredients
        }, {
            'Content-Type' : 'application/json'
        })
    }, [userId, title, introduction, category, requiredTime, content1, content2, mainImg, contentImg1, contentImg2, ingredients1, ingredients2, amount1, amount2]);

    return (
        <div>
            <input type="number" placeholder="유저아아디" value={userId} onChange={onChangeUserId} />
            <br/>
            <input type="text" placeholder="제목" value={title} onChange={onChangeTitle} />
            <br/>
            <input type="text" placeholder="설명" value={introduction} onChange={onChangeIntroduction} />
            <br/>
            <input type="text" placeholder="카테고리" value={category} onChange={onChangeCategory} />
            <br/>
            <input type="text" placeholder="소요시간" value={requiredTime} onChange={onChangeRequiredTime} />
            <br/>
            <input type="text" placeholder="콘텐트1" value={content1} onChange={onChangeContent1} />
            <br/>
            <input type="text" placeholder="콘텐트2" value={content2} onChange={onChangeContent2} />
            <br/>
            <input type="text" placeholder="메인사진" value={mainImg} onChange={onChangeMainImg} />
            <br/>
            <input type="text" placeholder="사진1" value={contentImg1} onChange={onChangeContentImg1} />
            <br/>
            <input type="text" placeholder="사진2" value={contentImg2} onChange={onChangeContentImg2} />
            <br/>
            <input type="text" placeholder="재료1" value={ingredients1} onChange={onChangeIngredients1} />
            <br/>
            <input type="text" placeholder="양1" value={amount1} onChange={onChangeAmount1} />
            <br/>
            <input type="text" placeholder="재료2" value={ingredients2} onChange={onChangeIngredients2} />
            <br/>
            <input type="text" placeholder="양2" value={amount2} onChange={onChangeAmount2} />
            <br/>
            <button onClick={postInfoSubmit}></button>
        </div>
    )
}

export default WriteComponent;