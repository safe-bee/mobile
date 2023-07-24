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
  ...StyleSheet.absoluteFill,
  backgroundColor: COLORS.WHITE_1,
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

export const MenuContainer = styled.View`
  flex: 0.12;
`;