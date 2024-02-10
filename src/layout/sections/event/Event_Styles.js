import styled from 'styled-components';
import sport from '../../../assets/image/sport1.jpg';
import { Theme } from '../../../styles/Theme';

const EventContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: url(${sport}) no-repeat top 1px left -1px;
  background-size: cover;
  margin: 10px auto 0;
  padding: 10px;
  position: relative;
  border: 1px solid ${Theme.colors.primaryFont};

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
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
  }

  @media ${Theme.media.tablet} {
    width: 100%;
  }

  @media ${Theme.media.mobile} {
    background: url(${sport}) no-repeat top 1px left -100px;
  }
`;

const SportContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1;
`;

const SportTitle = styled.h5`
  margin: 0;
  background-color: ${Theme.colors.primaryBg};
  text-transform: uppercase;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  padding: 0 7px;
  border-radius: 5px;
`;

const LeagueTitle = styled.span`
  margin: 0;
  text-transform: capitalize;
  font-size: 10px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
`;

const MatchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  gap: 10px;
`;

const PlayersName = styled.h4`
  margin: 0;
  text-transform: capitalize;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  padding: 3px 4px;
  border-radius: 5px;
`;

const DateContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Data = styled.span`
  margin: 0;
  text-transform: uppercase;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 14) + 14px);
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  text-align: center;
  color: ${Theme.colors.secondaryFont};
`;

const Time = styled.span`
  margin: 0;
  text-transform: capitalize;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Form = styled.form`
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  position: relative;
  padding-bottom: 70px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 70px;
  border-radius: 5px;
  background-color: ${(props) => (props.disStyle ? Theme.colors.secondaryBg : Theme.colors.primaryFont)};
  text-transform: uppercase;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.secondaryFont};
  padding: 6px 10px;
  border: 1px solid ${Theme.colors.primaryFont};
`;

export const S = {
  EventContainer,
  SportContainer,
  SportTitle,
  LeagueTitle,
  MatchContainer,
  PlayersContainer,
  PlayersName,
  DateContainer,
  Data,
  Time,
  Image,
  Form,
  SubmitButton,
};
