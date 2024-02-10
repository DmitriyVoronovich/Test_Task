import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { S } from './Header_Styles';

export const Header = ({ userName, openLoginForm, removeUser }) => (
  <S.HeaderContainer>
    <Logo />
    {!userName.name.length ? (
      <div>
        <S.UserName>{userName.name}</S.UserName>
        <S.ExitButton onClick={removeUser}>Выйти</S.ExitButton>
      </div>
    ) : (
      <S.JoinContainer onClick={openLoginForm}>Регистрация</S.JoinContainer>
    )}
  </S.HeaderContainer>
);
