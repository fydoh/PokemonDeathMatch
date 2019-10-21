import styled from 'styled-components';
import Checkmark from '@carvana/icons/Checkmark';
import History from './History';

export const PokemonCard = styled.div`
  background: ${props => props.theme.carvana.white.primary};
  border-radius: 3px;
  margin: 10px;
  margin-bottom: 15px;
  padding: 10px;
  min-width: 96px;
  min-height: 150px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-width: 115px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Check = styled(Checkmark)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: ${p => p.theme.carvana.blue.primary};
`;

export const HistoryIcon = styled(History)`
  color: ${p => p.theme.carvana.yellow.hover};
`;

export const Name = styled.p`
  margin-bottom: 0;
`;

export const WinsLossesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const WinsLossesLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Win = styled.div`
  color: ${p => p.theme.carvana.green.primary};
  font-weight: 700px;
`;

export const Loss = styled.div`
  color: ${p => p.theme.carvana.red.primary};
`;

export const Outcome = styled.span`
  margin-right: 3px;
`;
