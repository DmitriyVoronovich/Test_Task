import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <FooterSection>
            <Container>
<AgeWrapper>
    <Age>21+</Age>
    <AgeText>Участие в азартных играх запрещено лицам, не достигшим 21-летнего возраста, и лицам,
        ограниченным в посещении игорных заведений, виртуальных игорных заведений и (или)
        участии в азартных играх.</AgeText>
</AgeWrapper>
                <Text>
                    Специальное разрешение (лицензия) № 00000/000 выдано на основании решения
                    Министерства по налогам и сборам Республики Беларусь от 8 февраля 2024 №1.
                    Перечень видов азартных игр: букмекерская онлайн-игра, слот-игра, игра в карты в л
                    айв-режиме, игра в кости в лайв-режиме, цилиндрическая игра (рулетка) в лайв-режиме
                </Text>
            </Container>
        </FooterSection>
    );
};

const FooterSection = styled.section`
    max-width: 1210px;
    background-color: ${Theme.colors.secondaryBg};
    margin: 10px auto 0;
    padding: 10px;
    gap: 5px;
`

const AgeWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid ${Theme.colors.footerFont};
    padding-bottom: 5px;
`

const Age = styled.div`
    padding: 3px;
    text-transform: uppercase;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.footerFont};
    border: 2px solid ${Theme.colors.footerFont};
    display: flex;
    align-items: center;
`

const AgeText = styled.p`
    text-transform: capitalize;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.footerFont};
`

const Text = styled.p`
    text-transform: capitalize;
    font-size: calc((100vw - 360px) / (1445 - 360) * (14 - 12) + 12px);
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.footerFont};
`