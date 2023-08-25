import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';
import { ContainedButton } from '../../../elements/Button/Button'
import TextInput from '../../../elements/TextInput/index';
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
                   label='Direccion'
                   placeholder='Buscar una direccion'
                   onBlur={() => {}}
                   icon="ri-pencil-fill"
                   outlined={true}
                   onChangeText={(text) => setDomainVars(text)}
                   value={domainVars}
                />
              </View>

              <View style={{ flex: 1, flexDirection: 'row'  }}>
                
                <View style={{ flex: 0.5, paddingRight: 10 }}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    label='Latitud'
                    onBlur={() => {}}
                    icon="ri-pencil-fill"
                    outlined={true}
                    onChangeText={(text) => setDomainVars(text)}
                    value={domainVars}
                  />
                </View>

                <View style={{ flex: 0.5 }}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    label='Longitud'
                    onBlur={() => {}}
                    icon="ri-pencil-fill"
                    outlined={true}
                    onChangeText={(text) => setDomainVars(text)}
                    value={domainVars}
                  />
                </View>
              </View>

              <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                <ContainedButton 
                  disabled={false}
                  onSubmit={()=>{}}
                  label="Crear Apiario"
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

export default ApiaryLocation;