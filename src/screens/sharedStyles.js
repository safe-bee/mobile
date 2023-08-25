import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { FAB } from 'react-native-paper';
import { SIZES, makeSize } from '../theme/sizes';
import COLORS from '../theme/colors';


export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  ${props=>props.customStyle};
`;

export const NewThreadFAB = styled(FAB)`
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  bottom: ${SIZES.XL}px;
  right: ${SIZES.LG}px;
`;

export const BackgroundOpacity = styled.View({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
});

export const NewEmailOrThreadFAB = styled(FAB.Group)`
  position: absolute;
  bottom: ${(props) => makeSize(22) + props.paddingBottom}px;
  right: ${SIZES.SM}px;
`;

export const Row = styled.View`
  flex: 0.15;
`;

export const ButtonContainer = styled.View`
`;

/*
export const MenuContainer = styled.View`
  flex: 0.12;
`;
*/

export const MenuContainer = styled.View`
  flex: 0.1;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${COLORS.WHITE};
`;

export const MainContentContainer = styled.View`
  flex: 0.9;
  background-color: ${COLORS.HOME_GREY};
`;

export const Content = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  padding: 0 20px 20px 20px;
`;