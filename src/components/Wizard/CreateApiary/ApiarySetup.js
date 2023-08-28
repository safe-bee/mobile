import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import Calendar from '../../../elements/Calendar/index'
import { ContainedButton } from '../../../elements/Button/Button'
import Menu from '../../../components/Menu/index'
import Dots from '../../../components/Dots/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import { useSnackbar } from '../../../context/SnackbarContext';
import Loading from '../../../components/Loading/index';


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

  const { showSnackbar } = useSnackbar();

  const handleNext = () => {
    if (wizardState?.fields?.hiveName?.value) {
      setWizardPage('ApiaryEnvironment');
    } else {
      showSnackbar("Error de Validacion!", "Corriga los siguientes errores: 'nombre apiario' no seleccionado");
    }
  };

  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
               <View style={{ marginBottom: 20 }}>
                <Dots 
                  pages={[
                    {
                      onPress: () => setWizardPage('ApiarySetup'),
                      actualPage: true
                    },
                    {
                      onPress: () => setWizardPage('ApiaryEnvironment'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('ApiaryLocation'),
                      actualPage: false
                    }
                  ]}
                />
               </View>
                <View style={{ flex: 1, height: 380, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Configuracion Apiario
                    </Text>
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
                        onChangeText={(text) => wizardStateSetters?.updateField({ name: "hiveName", value: text })}
                        value={wizardState?.fields?.hiveName?.value}
                        error={wizardState?.fields?.hiveName?.error}
                      />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                      <Calendar 
                        onConfirm={(text) => wizardStateSetters?.updateField({ name: "dateTask", value: text })}
                        label='Date of task'
                        dateValue={wizardState?.fields?.dateTask?.value}
                        />
                    </View>

                    <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={handleNext}
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