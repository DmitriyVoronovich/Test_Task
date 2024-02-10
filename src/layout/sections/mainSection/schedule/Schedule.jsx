import React from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './Schedule_Styles';

export const Schedule = ({ data }) => {
  const navigate = useNavigate();
  const { id, comOne, comTwo, date, time, sport, league } = data;

  const selectEvent = () => navigate('/' + id);

  return (
    <S.ScheduleContainer onClick={selectEvent}>
      <S.SportScheduleContainer>
        <S.SportScheduleTitle>{sport}</S.SportScheduleTitle>
        <S.LeagueScheduleTitle>{league}</S.LeagueScheduleTitle>
      </S.SportScheduleContainer>
      <S.MatchScheduleContainer>
        <S.PlayersScheduleContainer>
          <S.PlayersScheduleName>{comOne}</S.PlayersScheduleName>
        </S.PlayersScheduleContainer>
        <S.DateScheduleContainer>
          <S.DataSchedule>{date}</S.DataSchedule>
          <S.TimeSchedule>{time}</S.TimeSchedule>
        </S.DateScheduleContainer>
        <S.PlayersScheduleContainer>
          <S.PlayersScheduleName>{comTwo}</S.PlayersScheduleName>
        </S.PlayersScheduleContainer>
      </S.MatchScheduleContainer>
    </S.ScheduleContainer>
  );
};
