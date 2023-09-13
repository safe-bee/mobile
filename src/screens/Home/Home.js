import React, { useEffect } from 'react';
import { View, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useQuery } from "@apollo/client";
import COLORS from '../../theme/colors';
import { GET_APIARIOS } from '../../graphql/queries/index';
import { ROUTES } from '../../constants';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { ContainedButton } from '../../elements/Button';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import ApiarioCard from '../../components/ApiarioCard/';
import Loading from '../../components/Loading/index';


const Container = styled.View`
  flex: 1;
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS, { fetchPolicy: "cache-and-network" });

  const apiarios = data?.apiarios;
  const navigation = useNavigation();


  if (error) {
    console.log("Error fetching apiarios", error);
  }
  
  return (
    <Container>
      <MainContentContainer>
          <Content>
            {
              loading ?
              <Loading size={50} /> : 
              <View style={{ flex: 1, paddingHorizontal: 5 }}>
                <ScrollView style={{ flex: 0.7 }}>
                    {apiarios.map(apiario => (
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
                      label="Crear Apiario"
                    />
                  </View>
                </View>
            </View>
            }
            
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