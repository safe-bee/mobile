import styled from 'styled-components/native';
import { Appbar, Text } from 'react-native-paper';
import { Image } from 'react-native';
import COLORS from '../../theme/colors';
import Icon from 'react-native-remix-icon';


export const Container = styled(Appbar.Header)`
  elevation: 0;
  background-color: transparent;
  height: 105px;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.View`
  border-radius: 20px;
  height: 35px;
  width: 35px;
  background-color: ${COLORS.YELLOW};
  left: 10;
  bottom: 15;
  align-items: center;
  justify-content: center;
`;

export const RIcon = styled(Icon)`
`;
