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
import { useMenuContext } from '../../context/MenuContext';

const Menu = () => {
 
 const navigation = useNavigation();
 const { selectedIcon, selectIcon } = useMenuContext();

 const handleHomeIconPress = () => {
   navigation.navigate(ROUTES.HOME);
   selectIcon('home');
 };

 const handleProfileIconPress = () => {
   navigation.navigate(ROUTES.PROFILE, { navigation });
   selectIcon('profile');
 };

 return (
    <Container>
        <IconContainer onPress={handleHomeIconPress}>
            <RIcon name="ri-home-2-fill" size={31} color={selectedIcon === 'home' ? COLORS.YELLOW : COLORS.BLACK_1} />
        </IconContainer>

        <IconContainer onPress={handleProfileIconPress}>
            <RIcon name="ri-account-circle-fill" size={35} color={selectedIcon === 'profile' ? COLORS.YELLOW : COLORS.BLACK_1} />
        </IconContainer>
    </Container>
  );
};

export default Menu;
