import React from 'react';
import { Container, BackgroundImage, BackButton, RIcon } from './Header.styles';
import { Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../../theme/colors'
import { ROUTES } from '../../constants';

export default function Header({ navigation, route, options }) {
    const routeName = route?.name;
    const screenWidth = Dimensions.get('window').width;
    console.log("hi")
    console.log("routeName:", routeName); // Verifica si routeName se imprime correctamente
    console.log("navigation:", navigation); // Verifica si navigation se pasa correctamente
    console.log("options:", options); // Verifica si options se pasa correctamente
    return (
      <Container>
        <BackgroundImage
            source={require('../../../assets/header1.jpg')}
            resizeMode="cover"
            style={{ width: screenWidth }}
        />
          {routeName === ROUTES.CREATE_APIARY 
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

