import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Logo} from "../../components/logo/Logo";

export const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo/>
            <JoinContainer onClick={props.openLoginForm}>
                Регистрация
            </JoinContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    max-width: 1210px;
    padding: 10px 20px;
    background-color: ${Theme.colors.secondaryBg};
    margin: 0 auto;
    display: flex;
    justify-content: space-bidween;
    align-items: center;
`
const JoinContainer = styled.button`
    height: 100%;
    border-radius: 5px;
    background-color: ${Theme.colors.primaryFont};
    text-transform: uppercase;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    cursor: pointer;
    color: ${Theme.colors.secondaryFont};
    padding: 6px 10px;
`