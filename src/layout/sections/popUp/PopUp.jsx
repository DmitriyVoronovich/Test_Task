import React from 'react';
import { S } from './PopUp_Styles';
import { Container } from '../../../components/Container';

export const PopUpMessage = ({ bid }) => (
  <Container>
    <S.PopUpContainer>
      <S.PopUpSpan>Спасибо, ваша ставка</S.PopUpSpan>
      <S.TeamName>{bid.comOne} - </S.TeamName>
      <S.TeamName>{bid.comTwo}, </S.TeamName>
      <S.TeamName>{bid.bid}</S.TeamName>
      <S.PopUpSpan>принята</S.PopUpSpan>
    </S.PopUpContainer>
  </Container>
);
