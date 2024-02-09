import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";
import sport from "../../../../assets/image/sport1.jpg"
import {useNavigate} from "react-router-dom";

export const Schedule = (props) => {
    const {id, comOne, comTwo, date, time, sport, league} = props.data
    const navigate = useNavigate(); // Get the navigate function

    const selectEvent = (id) => {
        navigate('/' + id); // Use navigate to change the route
    }

    return (
        <ScheduleContainer onClick={() => selectEvent(id)}>
                <SportScheduleContainer>
                    <SportScheduleTitle>{sport}</SportScheduleTitle>
                    <LeagueScheduleTitle>{league}</LeagueScheduleTitle>
                </SportScheduleContainer>
                <MatchScheduleContainer>
                    <PlayersScheduleContainer>
                        <PlayersScheduleName>{comOne}</PlayersScheduleName>
                    </PlayersScheduleContainer>
                    <DateScheduleContainer>
                        <DataSchedule>{date}</DataSchedule>
                        <TimeSchedule>{time}</TimeSchedule>
                    </DateScheduleContainer>
                    <PlayersScheduleContainer>
                        <PlayersScheduleName>{comTwo}</PlayersScheduleName>
                    </PlayersScheduleContainer>
                </MatchScheduleContainer>
        </ScheduleContainer>
    );
};

const ScheduleContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: url(${sport}) no-repeat top -55px left -1px;
    background-size: cover;
    margin: 10px auto 0;
    padding: 10px;
    position: relative;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .6);
        border-radius: 15px;
    }

    @media ${Theme.media.tablet} {
        width: 100%;
    }
`

const SportScheduleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    z-index: 1;
`

const SportScheduleTitle = styled.h5`
    margin: 0;
    background-color: ${Theme.colors.primaryBg};
    text-transform: uppercase;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
    padding: 0 7px;
    border-radius: 5px;
`

const LeagueScheduleTitle = styled.span`
    margin: 0;
    text-transform: capitalize;
    font-size: 10px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
`

const MatchScheduleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
`

const PlayersScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    gap: 10px;
`

const PlayersScheduleName = styled.h4`
    margin: 0;
    text-transform: capitalize;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
    padding: 3px 4px;
    border-radius: 5px;
`

const DateScheduleContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DataSchedule = styled.span`
    margin: 0;
    text-transform: uppercase;
    font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 14) + 14px);
    font-style: normal;
    line-height: normal;
    font-weight: bold;
    text-align: center;
    color: ${Theme.colors.secondaryFont};
`

const TimeSchedule = styled.span`
    margin: 0;
    text-transform: capitalize;
    font-size: ${Theme.frontSize.main};
    font-style: normal;
    line-height: normal;
    color: ${Theme.colors.secondaryFont};
    text-align: center;
`