import styled from 'styled-components/native';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { SIZES } from '../../theme/sizes';

export const BackgroundOpacity = styled.View({
  ...StyleSheet.absoluteFill,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
});

export const Container = styled(Animated.View)`
  border-top-left-radius: ${SIZES.SM}px;
  border-top-right-radius: ${SIZES.SM}px;
  position: absolute;
  right: 0;
  left: 0;
  top: ${Dimensions.get('window').height + 320}px;
  //bottom: -${Dimensions.get('window').height}px;
  bottom: 0;
  background-color: ${(props) => props.backgroundColor};
  height: ${Dimensions.get('window').height}px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;