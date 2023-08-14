import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import { Portal } from 'react-native-paper';
import Constants from 'expo-constants';

import COLORS from '../../theme/colors';
import {
  BackgroundOpacity,
  Container,
} from './BottomPortal.styles';

export default function BottomPortal({ children, handleClosePress }) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get('window').height;

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => handleClosePress());
  };

  useEffect(() => {
    const slideUp = () => {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };

    slideUp();
  }, [slideAnim]);

  const handleClose = () => {
    slideDown();
  };

  const slideUpAnim = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1 * (screenHeight - Constants?.statusBarHeight)],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Portal>
        <BackgroundOpacity />
        <Container backgroundColor={COLORS.WHITE} style={slideUpAnim}>
            {children}
        </Container>
    </Portal>
  );
}