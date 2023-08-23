import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Card } from 'react-native-paper';
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

const ApiaryEnvironment = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

    return (
        <Container>
          <MainContentContainer>
            <Content>
              <View style={{ flex: 1, height: 400, justifyContent: 'center', alignContent: 'center' }}>
                  <Card style={{ marginTop: 10, width: 180 }}>
                    <Card.Cover style={{ height: 80, width: 180 }} source={require('../../../../assets/rural.jpeg')} />
                  </Card>

                  <Card style={{ marginTop: 10, width: 180 }}>
                    <Card.Cover style={{ height: 80, width: 180 }} source={require('../../../../assets/suburban.jpeg')} />
                  </Card>

                  <Card style={{ marginTop: 10, width: 180 }}>
                    <Card.Cover style={{ height: 80, width: 180 }} source={require('../../../../assets/urban.jpeg')} />
                  </Card>
                  
                  <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                    <ContainedButton 
                       disabled={false}
                       onSubmit={() => setWizardPage('ApiaryLocation')}
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

export default ApiaryEnvironment;