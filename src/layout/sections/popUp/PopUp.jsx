import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const PopUpMessage = (props) => {
    return (
        <PopUpContainer>
            <PopUpSpan>Спасибо, ваша ставка</PopUpSpan>
            <TeamName>{props.bid.comOne} - </TeamName>
            <TeamName>{props.bid.comTwo}, </TeamName>
            <TeamName>{props.bid.bid}</TeamName>
            <PopUpSpan>принята</PopUpSpan>
        </PopUpContainer>
    );
};

const PopUpContainer = styled.div`
    width: 60%;
    position: absolute;
    display: flex;
    background-color: ${Theme.colors.primaryFont};
    padding: 10px;
    align-items: center;
    top: 0;
    left: 20%;
    justify-content: center;
`

const TeamName = styled.h4`
    margin: 0;
    text-transform: none;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
    padding: 3px 4px;
    border-radius: 5px;
`

const PopUpSpan = styled.span`
    margin: 0;
    text-transform: none;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
    padding: 3px 4px;
    border-radius: 5px;
`