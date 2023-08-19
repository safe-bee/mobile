import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import { GET_APIARIOS } from '../../graphql/queries/index';
import Menu from '../../components/Menu/index';
import { useQuery } from "@apollo/client";
import FabMenu from '../../components/Menu/FabMenu';
import TextInput from '../../elements/TextInput';
import Calendar from '../../elements/Calendar';
import CustomPicker from '../../elements/CustomPicker';
import { TextButton, ContainedButton} from '../../elements/Button';

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


const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS);
  const [domainVars, setDomainVars] = useState('');
  

  if (error) {
    console.log("Error fetching apiarios", error);
  }

  const options =  [{value: "test", label: "test"}, {value: "test1", label: "test1"}, {value: "test2", label: "test2"}];
  
  return (
    <Container>
      <ContentContainer>
        {loading ? (
            <ActivityIndicator color="#333" />
        ) : (
          <View style={styles.section}>
            {data?.apiarios.map((apiario) => (
              <View key={apiario.id} style={styles.apiarioContainer}>
                <Text style={styles.starshipName}>{apiario.id}</Text>
                <Text style={styles.starshipModel}>{apiario.name}</Text>
              </View>
            ))}

            <View style={{ flex: 1, marginLeft: 10 }}>


              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Calendar 
                  onConfirm={(val) => console.log(val)}
                  label='Date of task'
                />
              </View>


              <View style={{ flex: 1, zIndex: 9999 }}>
                  <CustomPicker
                    options={options}
                    value={{ value: "test", label: "test" }}
                    onChange={() =>{}}
                    label='Choose an option'
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


              {
                /*
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

              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <ContainedButton 
                  disabled={false}
                  onPress={() => {}}
                  label="Next"
                />
              </View>
                */
              }
              
   
             
            </View>
          </View>


        )}
      </ContentContainer>
      
      <FabMenu />
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red"
  },
  label: {
    marginBottom: 2,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  section: {
    marginVertical: 12,
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    height: 300,
  },
  starshipName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  starshipModel: {
    fontStyle: "italic",
  },
});


export default Home;