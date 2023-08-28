import React from 'react';
import { View, ScrollView } from "react-native";
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
import ApiarioCard from '../../components/ApiarioCard/'

const Container = styled.View`
  flex: 1;
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS);

  console.log("DATA IVOZ");
  console.log(data);
  const navigation = useNavigation();

  
  if (error) {
    console.log("Error fetching apiarios", error);
  }
  

  const apiariosMock = [
    {
      nombreApiario: 'Apiario 2',
      colmenas: [
        { nombreColmena: 'Colmena 4' },
        { nombreColmena: 'Colmena 5' },
      ],
    },
    {
      nombreApiario: 'Apiario 3',
      colmenas: [
        { nombreColmena: 'Colmena 6' },
        { nombreColmena: 'Colmena 7' },
        { nombreColmena: 'Colmena 8' },
        { nombreColmena: 'Colmena 9' },
      ],
    },
    {
      nombreApiario: 'Apiario 3',
      colmenas: [
        { nombreColmena: 'Colmena 6' },
        { nombreColmena: 'Colmena 7' },
        { nombreColmena: 'Colmena 8' },
        { nombreColmena: 'Colmena 9' },
      ],
    },
  ];

  return (
    <Container>
      <MainContentContainer>
          <Content>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>

              <ScrollView style={{ flex: 0.7 }}>
                  {apiariosMock.map(apiario => (
                    <View style={{ flex: 1, marginTop: 15 }}>
                      <ApiarioCard apiario={apiario}/>
                    </View>
                  ))}
              </ScrollView>
              
              <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <ContainedButton 
                    disabled={false}
                    onSubmit={() => navigation.navigate(ROUTES.CREATE_APIARY)}
                    label="CreateApiary"
                  />
                </View>
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