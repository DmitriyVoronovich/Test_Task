import React, { useState } from 'react';
import { S } from './Login_Styles';

export const Login = ({ closeLoginForm }) => {
  const [selectedValue, setSelectedValue] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(selectedValue));
    closeLoginForm();
  };

  return (
    <>
      <S.Fon></S.Fon>
      <S.LoginFormContainer onSubmit={handleSubmit}>
        <S.LoginFormTitle>Регистрация</S.LoginFormTitle>
        <S.InputTitle>Имя пользователя</S.InputTitle>
        <S.InputStyle placeholder={'Введите имя пользователя'} name="name" onChange={handleChange} />
        <S.InputTitle>Пароль</S.InputTitle>
        <S.InputStyle type={'password'} placeholder={'Введите пароль'} name="password" onChange={handleChange} />
        <S.ButtonContainer>
          <S.LoginButton type="submit">Зарегистрироваться</S.LoginButton>
          <S.LoginButton onClick={closeLoginForm}>Выйти</S.LoginButton>
        </S.ButtonContainer>
      </S.LoginFormContainer>
    </>
  );
};
