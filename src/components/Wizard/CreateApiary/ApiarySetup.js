import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import Calendar from '../../../elements/Calendar/index'
import { ContainedButton } from '../../../elements/Button/Button'
import Menu from '../../../components/Menu/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';



const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const ApiarySetup = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {
  const [domainVars, setDomainVars] = useState(''); 
  
  return (
      <Container>
        <MainContentContainer>
          <Content>
          <ScrollView style={{ flex: 1 }}>
              <View style={{ flex: 1, height: 300 }}>
                <View style={{ flex: 1 }}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      label='Hive name'
                      placeholder='Name your hive'
                      onBlur={() => {}}
                      icon="ri-pencil-fill"
                      outlined={true}
                      onChangeText={(text) => setDomainVars(text)}
                      value={domainVars}
                    />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Calendar 
                      onConfirm={(val) => console.log(val)}
                      label='Date of task'
                      />
                  </View>

                  <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                    <ContainedButton 
                      disabled={false}
                      onSubmit={() => setWizardPage('ApiaryEnvironment')}
                      label="Next"
                    />
                  </View>
              </View>
            </ScrollView>

          </Content>
        </MainContentContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
    )
}


export default ApiarySetup;