import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataWithMatches } from '../../../data';
import { Radiogroup } from './radiogroup/Radiogroup';
import { S } from './Event_Styles';

export const Event = ({ openPopUp }) => {
  const [disabled, setDisabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  const matchItem = dataWithMatches.find((item) => item.id === Number(params.id));

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const match = { comOne: matchItem.comOne, comTwo: matchItem.comTwo, bid: selectedValue };
    localStorage.setItem('match', JSON.stringify(match));
    navigate('/');
    openPopUp();
  };

  return (
    <S.EventContainer>
      <S.SportContainer>
        <S.SportTitle>{matchItem.sport}</S.SportTitle>
        <S.LeagueTitle>{matchItem.league}</S.LeagueTitle>
      </S.SportContainer>
      <S.MatchContainer>
        <S.PlayersContainer>
          <S.Image src={matchItem.logoOne} />
          <S.PlayersName>{matchItem.comOne}</S.PlayersName>
        </S.PlayersContainer>
        <S.DateContainer>
          <S.Data>{matchItem.date}</S.Data>
          <S.Time>{matchItem.time}</S.Time>
        </S.DateContainer>
        <S.PlayersContainer>
          <S.Image src={matchItem.logoTwo} />
          <S.PlayersName>{matchItem.comTwo}</S.PlayersName>
        </S.PlayersContainer>
      </S.MatchContainer>
      <S.Form onSubmit={handleChange}>
        <Radiogroup handleChange={handleChange} />
        <S.SubmitButton type="submit" onClick={handleSubmit} disabled={disabled} disStyle={disabled}>
          Сделать ставку
        </S.SubmitButton>
      </S.Form>
    </S.EventContainer>
  );
};
