import React from 'react';
import { Text } from 'react-native'
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';

export const MenuContainer = styled.View`
  flex: 0.1;
  background-color: white;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Todo = () => {
  return (
    <Container>
      <ContentContainer />
      <Text>
          Todo
      </Text>

      <FabMenu />
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default Todo;