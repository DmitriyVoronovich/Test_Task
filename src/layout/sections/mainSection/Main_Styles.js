import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';

const MainSection = styled.section`
  padding: 10px 0;
  ${Container} {
    background-color: ${Theme.colors.secondaryBg};
    padding: 10px 0 20px 0;
  }
`;

export const S = {
  MainSection,
};
