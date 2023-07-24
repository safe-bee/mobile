import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { BackgroundOpacity } from '../../screens/sharedStyles';
import styled from 'styled-components/native';
import COLORS from '../../theme/colors'
import { View } from "react-native";

const Container = styled(FAB.Group)`
  background-color: ${COLORS.YELLOW};
  position: absolute;
`;

const FabMenu = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
      <Portal>
        {open ? <BackgroundOpacity /> : null}
          <FAB.Group
            open={open}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 120,
              marginBottom: -28,
              marginRight: 10,
              borderRadius: 40,
            }}
            visible
            color={COLORS.BLACK_1}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add'), style: { backgroundColor: COLORS.YELLOW } },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
                style: { backgroundColor: COLORS.YELLOW }
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
      </Portal>
  );
};

export default FabMenu;