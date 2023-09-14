import React from 'react';
import { Container, BackgroundImage, BackButton, RIcon } from './Header.styles';
import { Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors'
import { ROUTES_WITH_BACK_ACTION } from '../../constants';
import Dots from '../Dots/index';

export default function Header({ navigation, route, options }) {
    const routeName = route?.name;
    const screenWidth = Dimensions.get('window').width;
    return (
      <Container>
        <BackgroundImage
            source={require('../../../assets/header1.jpg')}
            resizeMode="cover"
            style={{ width: screenWidth }}
        />
          {ROUTES_WITH_BACK_ACTION.includes(routeName)
            ?   <TouchableOpacity onPress={() => navigation.goBack()}>
                  <BackButton>
                    <RIcon name="ri-arrow-left-s-line" size={23} color={COLORS.GREY_60} />
                  </BackButton>
                </TouchableOpacity>
            : null
          }
      </Container>
    );
}

