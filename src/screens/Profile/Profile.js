import React from 'react';
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import { TextButton } from '../../elements/Button/Button'
import { Text } from 'react-native-paper';
import { View } from "react-native";
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer } from '../sharedStyles';
import AuthService from '../../services/auth.service';
import { useUserContext } from '../../context/UserContext';

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Profile = () => {
  
  const { currentUser, setCurrentUser } = useUserContext();

  const handleSignOut = async () => {
    await AuthService.resetAuth();
    setCurrentUser(null);
  };


  return (
    <Container>
        <MainContentContainer>

          <View style={{ paddingLeft: 30, marginTop: 10, flex: 0.1 }}>
              <Text style={{ fontSize: 20, fontFamily: FONTS.medium, color: COLORS.BLACK_2 }}>
                  Informacion personal
              </Text>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: 30, flex: 0.1, marginTop: 20, justifyContent: 'center' }}>
              <View style={{ flex: 0.2 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.medium, color: COLORS.YELLOW }}>
                    Usuario:
                </Text>
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.regular, color: COLORS.BLACK_2 }}>
                    {currentUser?.nombreUsuario}
                </Text>
              </View>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: 30, flex: 0.1, marginTop: 20, justifyContent: 'center' }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.medium, color: COLORS.YELLOW }}>
                    Correo Electronico:
                </Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.regular, color: COLORS.BLACK_2 }}>
                  {currentUser?.correoElectronico}
                </Text>
              </View>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: 30, flex: 0.1, marginTop: 20, justifyContent: 'center' }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.medium, color: COLORS.YELLOW }}>
                    Apiarios disponibles:
                </Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 15, fontFamily: FONTS.regular, color: COLORS.BLACK_2 }}>
                    X
                </Text>
              </View>
          </View>

          <View style={{ flexDirection: 'row', flex: 0.2, paddingLeft: 30, marginTop: 20, alignItems: 'flex-end', justifyContent: 'center' }}>
              <View style={{ width: 250 }}>
                <TextButton 
                    onSubmit={handleSignOut}
                    label="Desloguearse"
                />     
              </View>
          </View>

        </MainContentContainer>
        
        <View>
          <FabMenu />
        </View>
        
        <MenuContainer>
          <Menu />
        </MenuContainer>
    </Container>
  );
}

export default Profile;