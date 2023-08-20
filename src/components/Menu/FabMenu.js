import * as React from 'react';
import { Image } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { BackgroundOpacity } from '../../screens/sharedStyles';
import styled from 'styled-components/native';
import { RIcon } from './Menu.styles';
import COLORS from '../../theme/colors'
import { View } from "react-native";

const Container = styled(FAB.Group)`
  position: absolute;
  right: 115;
`;

const FabMenu = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
      <Portal>
        {open ? <BackgroundOpacity /> : null}
          <Container
            open={open}
            visible
            color={COLORS.YELLOW}
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
                      <RIcon name="calendar-check-line" size={30} color={COLORS.BLACK_1} />
                  </View>
                ),
                label: 'Inspection',
                onPress: () => console.log('Pressed add'), 
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
                      <RIcon name="ri-survey-line" size={30} color={COLORS.BLACK_1} />
                  </View>
                ),
                onPress: () => console.log('Pressed star'),
                label: 'To-Do',
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
                      <RIcon name="profile-line" size={30} color={COLORS.BLACK_1} />
                  </View>
                ),
                label: 'Record',
                onPress: () => console.log('Pressed star'),
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