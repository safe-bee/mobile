import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomPortal from '../../components/BottomPortal'
import TextInput from '../TextInput/index';
import { TextButton, ContainedButton } from '../Button/index';

const MyCalendar = ({
  label,
  onConfirm,
}) => {

   const today = new Date();
   const formattedTodayDate = moment(today).format('MM/DD/YYYY');
   
   const [open, setOpen] = useState(false);
   const [dateVal, setDate] = useState(today);
   const [inputVal, setInputVal] = useState(formattedTodayDate);

   const handleConfirm = () => {
    onConfirm(dateVal);
    setOpen(false);
    const formattedDate = moment(dateVal).format('MM/DD/YYYY');
    setInputVal(formattedDate);
   };

   return (
    <>
        <View style={{ width: '100%' }}>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <TextInput
                autoCapitalize="none"
                disabled={true}
                autoCorrect={false}
                label={label}
                editable={false}
                onBlur={() => {}}
                outlined={true}
                value={inputVal}
                isCalendar={true}
                icon="ri-calendar-2-fill"
              />
            </TouchableOpacity>
        </View>
        {
          open ?         
          <BottomPortal handleClosePress={() => setOpen(false)}>
            <DateTimePicker display="spinner" value={dateVal} style={{ height: 150 }} onChange={(_, date) => setDate(date)}/>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <View style={{ alignItems:'center', flex: 0.5 }}>
                  <TextButton 
                    disabled={false}
                    onSubmit={() => setOpen(false)}
                    label="Cancel"
                  />
                </View>
                <View style={{ alignItems:'center', flex: 0.5 }}>
                  <ContainedButton 
                    disabled={false}
                    onSubmit={() => handleConfirm()}
                    label="Confirm"
                  />
                </View>
            </View>
          </BottomPortal> : null
        }

    </>
   )
}


export default MyCalendar;