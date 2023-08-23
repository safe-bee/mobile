import React from 'react';
import { Text } from 'react-native'
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

const Record = () => {
  return (
    <Container>
      <ContentContainer />
      
        <Text>
          Record
        </Text>

      <FabMenu />
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default Record;