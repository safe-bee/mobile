import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';

const TwoOptionsSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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
        <Text style={styles.optionText}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          isOption2Selected ? styles.selectedOption : null,
        ]}
        onPress={() => handleOptionClick(2)}
      >
        <Text style={styles.optionText}>Hive History</Text>
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
    width: 260,
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
    width: 130,
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
