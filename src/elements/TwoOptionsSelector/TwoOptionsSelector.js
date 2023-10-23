import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../theme/colors';

const TwoOptionsSelector = ({ setSelectedOption, selectedOption }) => {

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const isOption1Selected = selectedOption === 1;
  const isOption2Selected = selectedOption === 2;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.option,
          isOption1Selected ? styles.selectedOption : null,
        ]}
        onPress={() => handleOptionClick(1)}
      >
        <Text style={styles.optionText}>Tareas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          isOption2Selected ? styles.selectedOption : null,
        ]}
        onPress={() => handleOptionClick(2)}
      >
        <Text style={styles.optionText}>Registros</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.selectionIndicator,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: COLORS.BLUE_1,
    borderRadius: 5,
    textAlign: 'center'
  },
  option: {
    borderRadius: 5,
    width: 150,
    height: 40,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  selectedOption: {
    backgroundColor: COLORS.YELLOW,
    alignContent: 'center',
    justifyContent: 'center'
  },
  optionText: {
    textAlign: 'center',
    color: 'black',
  },
  selectionIndicator: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: 'transparent',
    transition: 'left 0.3s ease-in-out',
  },
});

export default TwoOptionsSelector;
