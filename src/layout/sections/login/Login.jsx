import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const Login = (props) => {
    return (
        <LoginFormContainer>
            <LoginFormTitle>Регистрация</LoginFormTitle>
            <InputTitle>Имя пользователя</InputTitle>
            <InputStyle placeholder={'Ведите имя пользователя'}/>
            <InputTitle>Пароль</InputTitle>
            <InputStyle type={"password"} placeholder={'Ведите пароль'}/>
            <div>
                <LoginButton onClick={props.closeLoginForm}>Зарегистрироваться</LoginButton>
                <LoginButton onClick={props.closeLoginForm}>Выйти</LoginButton>
            </div>
        </LoginFormContainer>
    );
};

const LoginFormContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${Theme.colors.secondaryBg};
    z-index: 2;
    padding: 50px;
    top: 20%;
    left: 35%;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .6);
        border-radius: 15px;
        z-index: -1;
    }
    
    div {
        display: flex;
        gap: 30px;
        margin-top: 20px;
    }
`

const LoginFormTitle = styled.h3`
    text-transform: uppercase;
    font-size: calc((100vw - 360px) / (1445 - 360) * (20 - 16) + 16px);
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    cursor: pointer;
    color: ${Theme.colors.primaryFont};
`

const InputTitle = styled.span`
    text-transform: uppercase;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    cursor: pointer;
    color: ${Theme.colors.secondaryFont};
    margin-top: 10px;
`

const InputStyle = styled.input`
margin-top: 5px;
    padding: 5px;
`

const LoginButton = styled.button`
    text-transform: uppercase;
    font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 12) + 12px);
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    cursor: pointer;
    color: ${Theme.colors.primaryFont};
`