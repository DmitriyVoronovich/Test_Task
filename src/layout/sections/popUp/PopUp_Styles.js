import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';

const PopUpContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${Theme.colors.primaryFont};
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media ${Theme.media.tablet} {
    width: 100%;
  }
`;

const TeamName = styled.h4`
  margin: 0;
  text-transform: none;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  padding: 3px 4px;
  border-radius: 5px;
`;

const PopUpSpan = styled.span`
  margin: 0;
  text-transform: none;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  padding: 3px 4px;
  border-radius: 5px;
`;

export const S = {
  PopUpContainer,
  TeamName,
  PopUpSpan,
};
