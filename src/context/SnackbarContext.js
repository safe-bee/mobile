import React, { createContext, useContext, useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { View, StatusBar, Platform, Text } from 'react-native';
import COLORS from '../theme/colors';
import FONTS from '../theme/fonts'

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [secondMessage, setSecondMessage] = useState('');

  const showSnackbar = (msg, sndMessage = '') => {
    setMessage(msg);
    setSecondMessage(sndMessage);
    setVisible(true);
  };

  const hideSnackbar = () => {
    setVisible(false);
    setMessage('');
    setSecondMessage('');
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
      {children}
      {visible && (
          <Snackbar
            visible={visible}
            onDismiss={hideSnackbar}
            duration={Snackbar.DURATION_SHORT}
            wrapperStyle={{ top: 0 }}
            style={{ backgroundColor: COLORS.RED_80, marginTop: 60 }}
          >
            <View>
              <Text style={{ fontSize: 16, fontFamily: FONTS.medium, color: COLORS.WHITE }}>
                {message}
              </Text>
            </View>
            {
              secondMessage 
              ?
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 12, fontFamily: FONTS.regular, color: COLORS.WHITE }}>
                  {secondMessage}
                </Text>
              </View>
              : ''
            }

          </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar debe utilizarse dentro de SnackbarProvider');
  }
  return context;
};
