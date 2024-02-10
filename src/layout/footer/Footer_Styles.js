import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

const FooterSection = styled.section`
  max-width: 1210px;
  background-color: ${Theme.colors.secondaryBg};
  margin: 10px auto 0;
  padding: 10px;
  gap: 5px;
  border: 1px solid ${Theme.colors.primaryFont};
`;

const AgeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${Theme.colors.footerFont};
  padding-bottom: 5px;
`;

const Age = styled.div`
  padding: 3px;
  text-transform: uppercase;
  font-size: ${Theme.frontSize.main};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.footerFont};
  border: 2px solid ${Theme.colors.footerFont};
  display: flex;
  align-items: center;
`;

const AgeText = styled.p`
  text-transform: capitalize;
  font-size: ${Theme.frontSize.small};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.footerFont};
`;

const Text = styled.p`
  text-transform: capitalize;
  font-size: ${Theme.frontSize.small};
  font-style: normal;
  line-height: normal;
  color: ${Theme.colors.footerFont};
`;

export const S = {
  FooterSection,
  AgeWrapper,
  Age,
  AgeText,
  Text,
};
