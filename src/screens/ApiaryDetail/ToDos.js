import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';


const ToDos = () => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={1}/>
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={2} />
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={3} />
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={4} />
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={5} />
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={6} />
                <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={7} />
            </View>
        </ScrollView>
    )
}


export default ToDos;

