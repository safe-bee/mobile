import React from 'react';
import {
    Container,
    IconContainer,
    MenuTitle,
    RIcon
} from './Menu.styles';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import COLORS from '../../theme/colors';


const Menu = () => {
 
 const navigation = useNavigation();
 
 const handleHomeIconPress = () => {
   navigation.navigate(ROUTES.HOME);
 };

 const handleProfileIconPress = () => {
   navigation.navigate(ROUTES.PROFILE, { navigation });
 };

 return (
    <Container>
        <IconContainer onPress={handleHomeIconPress}>
            <RIcon name="ri-home-2-fill" size={35} color={COLORS.BLACK_1} />
            <MenuTitle color={COLORS.BLACK_1}>Home</MenuTitle>
        </IconContainer>

        <IconContainer onPress={handleProfileIconPress}>
            <RIcon name="ri-account-circle-fill" size={35} color={COLORS.BLACK_1} />
            <MenuTitle color={COLORS.BLACK_1}>Profile</MenuTitle>
        </IconContainer>
    </Container>
  );
};

export default Menu;
