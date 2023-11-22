import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import COLORS from '../../theme/colors';
import { SIZES } from '../../theme/sizes';


export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  flex: 1;
  padding-horizontal: ${SIZES.LG}px;
`;

export const LogoContainer = styled.View`
  flex: 0.2;
  justify-content: center;
`;

export const LogoInnerContainer = styled.View`
  align-self: center;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  flex-direction: row;
  align-items: center;
`;

export const KeyboardDismissContainer = styled.View`
  flex: 1;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex: 2;
  padding-bottom: ${SIZES.XL}px;
`;

export const FormHeaderText = styled(Text)`
  color: ${COLORS.BLACK_1};
  font-family: ${(props) => props.fontFamily};
  font-size: ${SIZES.XL}px;
  width: 50%;
  margin-bottom: ${SIZES.MD}px;
  padding-top: 5;
`;
