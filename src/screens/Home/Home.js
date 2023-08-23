import React, { useState } from 'react';
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import { GET_APIARIOS } from '../../graphql/queries/index';
import { ROUTES } from '../../constants';
import Menu from '../../components/Menu/index';
import { useQuery } from "@apollo/client";
import FabMenu from '../../components/Menu/FabMenu';
import CreateApiaryWizard from '../../components/Wizard/CreateApiary/CreateApiaryWizard'
import { ContainedButton } from '../../elements/Button';
import TwoOptionsSelector from '../../elements/TwoOptionsSelector';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';


const Container = styled.View`
  flex: 1;
  `;

const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS);
  const navigation = useNavigation();

  if (error) {
    console.log("Error fetching apiarios", error);
  }
  
  return (
    <Container>
      <MainContentContainer>
          <Content>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <ContainedButton 
                  disabled={false}
                  onSubmit={() => navigation.navigate(ROUTES.CREATE_APIARY)}
                  label="CreateApiary"
                />
              </View>
            </View>
          </Content>
      </MainContentContainer>
      
      <View >
        <FabMenu />
      </View>
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default Home;





{
  /*

 <View style={{ flex: 1, zIndex: 9999 }}>
    <CustomPicker
      options={options}
      value={{ value: "test", label: "test" }}
      onChange={() =>{}}
      label='Choose an option'
    />
  </View>



<View style={{ flex: 1, marginLeft: 20}}>
  <TwoOptionsSelector />
</View>

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


  */
}