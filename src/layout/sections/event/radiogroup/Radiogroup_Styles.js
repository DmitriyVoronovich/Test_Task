import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';

const Input = styled.input`
  &[type='radio'] {
    display: none;
  }

  &[type='radio'] + label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    line-height: 20px;
  }

  &[type='radio'] + label:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 45%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border: 2px solid #000;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
  }

  &[type='radio']:checked + label:before {
    background-color: ${Theme.colors.primaryFont};
  }
`;

const Label = styled.label`
  background-color: ${Theme.colors.primaryBg};
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
  padding: 0 7px 3px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const S = {
  Input,
  Label,
};
