import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import CustomPicker from '../../../elements/CustomPicker/index'
import { ContainedButton } from '../../../elements/Button/Button'
import Menu from '../../Menu/index'
import Dots from '../../Dots/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import { useSnackbar } from '../../../context/SnackbarContext';
import Loading from '../../Loading/index';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const HiveConfirm = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

  const { showSnackbar } = useSnackbar();

  const handleNext = () => {
    if (wizardState?.fields?.hiveName?.value) {
      setWizardPage('HiveAdvanced');
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
                      onPress: () => setWizardPage('HiveSetup'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveAdvanced'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveQueen'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveConfirm'),
                      actualPage: true
                    }
                  ]}
                />
               </View>
                <View style={{ flex: 1, height: 450, paddingHorizontal: 10 }}>
                   <View style={{ flex: 1 }}>
                    <Image
                          source={require('../../../../assets/hive4.png')} 
                          style={{ width: 150, height: 150 }} 
                      />
                    </View>

                    <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={handleNext}
                        label="Crear Colmena"
                        icon={ wizardState?.mutationLoading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
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


export default HiveConfirm;