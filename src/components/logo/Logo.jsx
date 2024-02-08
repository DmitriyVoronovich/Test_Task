import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoTitle>Ставки на <span>спорт</span></LogoTitle>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
`

const LogoTitle = styled.span`
    text-transform: uppercase;
    font-size: calc((100vw - 360px) / (1445 - 360) * (20 - 16) + 16px);
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    cursor: pointer;
    color: ${Theme.colors.secondaryFont};

    span {
        color: ${Theme.colors.primaryFont};
    }
`