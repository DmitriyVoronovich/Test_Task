import React from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './Logo_Styles';

export const Logo = () => {
  const navigate = useNavigate();

  const selectEvent = () => {
    navigate('/');
  };

  return (
    <S.LogoContainer>
      <S.LogoTitle onClick={selectEvent}>
        Ставки на <span>спорт</span>
      </S.LogoTitle>
    </S.LogoContainer>
  );
};
