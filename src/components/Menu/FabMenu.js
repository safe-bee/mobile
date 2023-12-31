import * as React from 'react';
import { Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMenuContext } from '../../context/MenuContext';
import { FAB, Portal } from 'react-native-paper';
import { BackgroundOpacity } from '../../screens/sharedStyles';
import { ROUTES } from '../../constants';
import styled from 'styled-components/native';
import { RIcon } from './Menu.styles';
import COLORS from '../../theme/colors'
import { View } from "react-native";
import FONTS from '../../theme/fonts';

const Container = styled(FAB.Group)`
  position: absolute;
  flex: 1;
  align-items: center;
  padding-right: 145px;
  padding-bottom: 20px;
`;

const FabMenu = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({ open: false });
  const { selectedIcon, selectIcon } = useMenuContext();

  const screenWidth = Dimensions.get('window').width;
  
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const handleRecordIconPress = () => {
    navigation.navigate(ROUTES.RECORD);
    selectIcon('record');
  };
 
  const handleTareaIconPress = () => {
    navigation.navigate(ROUTES.TAREA, { navigation });
    selectIcon('tarea');
  };
 
  const handleInspectionIconPress = () => {
    navigation.navigate(ROUTES.INSPECTION, { navigation });
    selectIcon('inspection');
  };
 

  return (
      <Portal>
        {open ? <BackgroundOpacity /> : null}
          <Container
            open={open}
            visible
            color={COLORS.YELLOW}
            backdropColor='rgba(0, 0, 0, 0.7)'
            backgroundColor='rgba(0, 0, 0, 0.7)'
            fabStyle={{
              backgroundColor: COLORS.YELLOW,
              borderRadius: 50,
              width: 65,
              height: 65,
              paddingRight: 15,
            }}
            icon={() => (
              <View
                style={{
                  width: 40,
                  height: 40,
              }}>
                <Image
                  source={require('../../../assets/icon.png')}
                  style={{ width: 35, height: 35 }}
                />
              </View>
            )}
            actions={[
              { 
                icon: () => (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      paddingLeft: 2,
                      paddingTop: 2,
                  }}>
                      <RIcon name="calendar-check-line" size={30} color={COLORS.WHITE_1} />
                  </View>
                ),
                label: 'Inspeccion',
                labelStyle: { fontFamily: FONTS.regular },
                labelTextColor: COLORS.WHITE,
                onPress: () => handleInspectionIconPress(), 
                style: { width: 50, height: 50, borderRadius: 50, backgroundColor: COLORS.YELLOW } 
              },
              {
                icon: () => (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      paddingLeft: 2,
                      paddingTop: 2,
                  }}>
                      <RIcon name="ri-survey-line" size={30} color={COLORS.WHITE_1} />
                  </View>
                ),
                onPress: () => handleTareaIconPress(),
                label: 'Tarea',
                labelStyle: { fontFamily: FONTS.regular },
                labelTextColor: COLORS.WHITE,
                style: { width: 50, height: 50, borderRadius: 50, backgroundColor: COLORS.YELLOW }
              },
              {
                icon: () => (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      paddingLeft: 2,
                      paddingTop: 2,
                  }}>
                      <RIcon name="profile-line" size={30} color={COLORS.WHITE_1} />
                  </View>
                ),
                label: 'Registrar',
                labelStyle: { fontFamily: FONTS.regular },
                labelTextColor: COLORS.WHITE,
                onPress: () => handleRecordIconPress(),
                style: { width: 50, height: 50, borderRadius: 50, backgroundColor: COLORS.YELLOW }
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          >
        </Container>
      </Portal>
  );
};

export default FabMenu;