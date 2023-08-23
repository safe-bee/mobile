import React from 'react';
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer } from '../../screens/sharedStyles';


export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Profile = () => {
  return (
    <Container>
      <ContentContainer />
      
      <FabMenu />
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default Profile;