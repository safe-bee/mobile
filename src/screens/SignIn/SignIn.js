import React, { useEffect } from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Image,
  View
} from 'react-native';
import COLORS from '../../theme/colors';
import { SIZES } from '../../theme/sizes';
import TextInput from '../../elements/TextInput/index';
import { ContainedButton } from '../../elements/Button/Button'
import useSignIn from './useSignIn';
import FONTS  from '../../theme/fonts';
import { useSnackbar } from '../../context/SnackbarContext';
import { 
  SafeAreaContainer,
  KeyboardDismissContainer,
  Container,
  LogoContainer,
  LogoInnerContainer,
  FormHeaderText
} from './SignIn.styles'

const LOGIN_LOGO_HEIGHT = 65;
const LOGIN_LOGO_WIDTH = 313;

const screen = Dimensions.get('screen');
const loginLogoContainerWidth = screen.width - 120;
const ratio = loginLogoContainerWidth / LOGIN_LOGO_WIDTH;
const loginLogoContainerHeight = LOGIN_LOGO_HEIGHT * ratio;

const SignIn = () => {


  const { showSnackbar } = useSnackbar();

   const handleError = (errMessage) => {
      showSnackbar("Ha habido un error.", errMessage, "error");
   };

   const {
    fields,
    onSubmit,
    updateField,
    mutationLoading,
   } = useSignIn({ handleError });

   
   const handleSubmit = () => {
    onSubmit();
  };

   return (
    <SafeAreaContainer>
          <KeyboardDismissContainer onPress={Keyboard.dismiss}>
            <Container>
              <LogoContainer>
                <LogoInnerContainer
                  height={loginLogoContainerHeight}
                  width={loginLogoContainerWidth}
                >
                    <Image
                      source={require('../../../assets/icon.png')}
                      style={{ width: 100, height: '100%', resizeMode: 'contain' }}
                    />

                    <FormHeaderText fontFamily={FONTS.medium}>
                      BeeSafe
                    </FormHeaderText>
                </LogoInnerContainer>
              </LogoContainer>
              
              <View style={{ flex: 0.15, width: '100%' }}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  label='Nombre de usuario'
                  onBlur={() => {}}
                  outlined={true}
                  onChangeText={(text) => updateField({ name: "username", value: text })}
                  value={fields.username.value}
                  error={fields.username.error}
                />

              </View>

              <View style={{ flex: 0.15, width: '100%' }}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  label='Contraseña'
                  onBlur={() => {}}
                  outlined={true}
                  onChangeText={(text) => updateField({ name: "password", value: text })}
                  value={fields.password.value}
                  error={fields.password.error}
                  secureTextEntry={true}
                />
              </View>

                <ContainedButton 
                  onSubmit={handleSubmit}
                  label="Ingresar"
                  extraStyles={{ marginTop: 10 }}
                  icon={ mutationLoading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                />        

            </Container>
          </KeyboardDismissContainer>
      </SafeAreaContainer>
    )
}


const styles = StyleSheet.create({
    labelStyle: {
      paddingVertical: SIZES.XS,
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: SIZES.LG,
      paddingTop: '10%',
      minHeight: '100%'
    },
});
  

export default SignIn;