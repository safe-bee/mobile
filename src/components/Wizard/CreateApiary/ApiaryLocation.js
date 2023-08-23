import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';
import { ContainedButton } from '../../../elements/Button/Button'
import Menu from '../../../components/Menu/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const ApiaryLocation = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

    return (
        <Container>
          <MainContentContainer>
            <Content>
              <View style={{ flex: 1, height: 300 }}>
                  <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                    <ContainedButton 
                       disabled={false}
                       onSubmit={() => setWizardPage('ApiaryEnvironment')}
                       label="Next"
                     />
                   </View>
              </View>
  
            </Content>
          </MainContentContainer>
  
          <MenuContainer>
            <Menu />
          </MenuContainer>
  
        </Container>
      )
}

export default ApiaryLocation;