import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import InspectionCard from '../../components/InspectionCard/index';
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import FONTS from '../../theme/fonts';
import COLORS from '../../theme/colors';

const HiveHistory = () => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                <View>
                    <Text style={{ color: COLORS.GREEN_2, fontSize: 17, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                        Agosto | 2023
                    </Text>
                </View>
                <InspectionCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} />
                <HideableCard 
                  setOpenCard={setOpenCard} 
                  openCardIndex={openCardIndex} 
                  index={1}
                  header={"Document flora"} 
                  date={"19 de octubre"}
                  details={[
                    {
                        title: 'Flora tratada',
                        moreInfo: 'Aca va la flora tratada'
                    }
                 ]}
                />
            </View>
        </ScrollView>
    )
}


export default HiveHistory;

