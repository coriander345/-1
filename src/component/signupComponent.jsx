import React, { useCallback, useState } from 'react';
import axios from 'axios';

const SignupComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onChangeEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const onChangeDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, []);

    const userInfoSubmit = useCallback(async () => {
        console.log(email, password, name, description);

        await axios.post('https://localhost:4000/users/signUp', {
            email,
            password,
            name,
            description
        }, {
            headers: { 'ContentType' : 'application/json' }
        })
    }, [email, password, name, description]);

    return (
        <div>
            <input type="text" placeholder="이메일" value={email} onChange={onChangeEmail} />
            <br/>
            <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
            <br/>
            <input type="text" placeholder="닉네임" value={name} onChange={onChangeName} />
            <br/>
            <input type="text" placeholder="설명" value={description} onChange={onChangeDescription} />
            <br/>
            <button onClick={userInfoSubmit}></button>
        </div>
    )
}

export default SignupComponent
