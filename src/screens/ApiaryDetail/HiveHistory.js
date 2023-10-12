import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import InspectionCard from '../../components/InspectionCard/index';
import { ScrollView } from 'react-native-gesture-handler';


const HiveHistory = () => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                <InspectionCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={1}/>
            </View>
        </ScrollView>
    )
}


export default HiveHistory;

