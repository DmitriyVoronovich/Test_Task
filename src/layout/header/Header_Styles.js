import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

const HeaderContainer = styled.header`
  max-width: 1210px;
  padding: 10px 20px;
  background-color: ${Theme.colors.secondaryBg};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Theme.colors.primaryFont};

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const JoinContainer = styled.button`
  height: 100%;
  border-radius: 5px;
  background-color: ${Theme.colors.primaryFont};
  text-transform: uppercase;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.secondaryFont};
  padding: 6px 10px;
`;

const ExitButton = styled.button`
  height: 100%;
  border-radius: 5px;
  background-color: red;
  text-transform: capitalize;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.secondaryFont};
  padding: 6px 10px;
`;

const UserName = styled.span`
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.secondaryFont};
`;

export const S = {
  HeaderContainer,
  JoinContainer,
  ExitButton,
  UserName,
};
