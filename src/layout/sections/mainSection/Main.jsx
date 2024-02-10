import React from 'react';
import { Container } from '../../../components/Container';
import { dataWithMatches } from '../../../data';
import { Schedule } from './schedule/Schedule';
import { Login } from '../login/Login';
import { S } from './Main_Styles';
import { PopUpMessage } from '../popUp/PopUp';

export const Main = ({ closeLoginForm, bid, login, popUp }) => {
  return (
    <S.MainSection>
      {popUp && <PopUpMessage bid={bid} />}
      <Container>
        {login && <Login closeLoginForm={closeLoginForm} />}
        {dataWithMatches.map((item, index) => (
          <Schedule key={index} data={item} />
        ))}
      </Container>
    </S.MainSection>
  );
};
