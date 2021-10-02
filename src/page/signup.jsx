import React from 'react';
import styled from 'styled-components';

import SignupComponent from '../component/signupComponent';

const Signup = (props) => {

    return (
        <Form>
            <SignupComponent></SignupComponent>
        </Form>
    )    
};

const Form = styled.div`
    padding-top: 60px;
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    
`
export default Signup;
