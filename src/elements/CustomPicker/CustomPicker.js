import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import { SIZES, makeSize } from '../../theme/sizes';
import { Label, LabelContainer } from '../TextInput/TextInput.styles';

export default function CustomPicker({ options, onChange, value, label }) {
    const [open, setOpen] = useState(false);
    const [value1, setValue] = useState(null);
    const [items, setItems] = useState(options);
  
    return (
      <>
       <LabelContainer>
          <Label fontFamily={FONTS.regular}>
            {label}
          </Label>
        </LabelContainer>
       
       <DropDownPicker
         open={open}
         zIndex={999999}
         value={value1}
         items={items}
         setOpen={setOpen}
         setValue={setValue}
         setItems={setItems}
         style={{
          borderColor: COLORS.BLUE_1,
          backgroundColor: COLORS.BLUE_1,
         }}
         containerStyle={{
          borderRadius: SIZES.SM,
         }}
         textStyle={{
          fontSize: makeSize(3.5),
          fontFamily: FONTS.regular,
          fontWeight: '100',
          color: COLORS.BLACK_1,
         }}
         dropDownContainerStyle={{
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.BLUE_1,
         }}
       />
      </>
      
    );
}

CustomPicker.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
