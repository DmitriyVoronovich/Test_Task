import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';

const LoginFormContainer = styled.form`
  width: 40%;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.secondaryBg};
  align-items: center;
  z-index: 4;
  padding: 50px;
  top: 20%;
  left: 30%;

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
    z-index: -1;
  }

  @media ${Theme.media.tablet} {
    width: 50%;
    padding: 10px;
    left: 25%;
  }

  @media ${Theme.media.mobile} {
    width: 60%;
    padding: 10px;
    left: 20%;
  }
  @media screen and (max-width: 400px) {
    width: 70%;
    padding: 10px;
    left: 15%;
  }
`;

const Fon = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(40, 40, 47, 0.63);
  z-index: 3;
`;

const LoginFormTitle = styled.h3`
  text-transform: uppercase;
  font-size: calc((100vw - 360px) / (1445 - 360) * (20 - 16) + 16px);
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.primaryFont};
`;

const InputTitle = styled.span`
  text-transform: uppercase;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.secondaryFont};
  margin-top: 10px;
`;

const InputStyle = styled.input`
  margin-top: 5px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  @media screen and (max-width: 400px) {
    gap: 20px;
  }
`;

const LoginButton = styled.button`
  text-transform: uppercase;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 12) + 12px);
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  cursor: pointer;
  color: ${Theme.colors.primaryFont};
`;

export const S = {
  LoginFormContainer,
  Fon,
  LoginFormTitle,
  InputTitle,
  InputStyle,
  ButtonContainer,
  LoginButton,
};
