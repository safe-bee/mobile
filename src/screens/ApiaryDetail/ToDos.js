import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';


const ToDos = () => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                <HideableCard 
                  setOpenCard={setOpenCard} 
                  openCardIndex={openCardIndex} 
                  index={1}
                  header={"Tratamiento"} 
                  date={"19 de octubre"}
                  details={[
                    {
                        title: 'Enfermedad tratada',
                        moreInfo: 'Enfermedad X'
                    },
                    {
                        title: 'Enfermedad tratada',
                        moreInfo: 'Enfermedad X'
                    },
                    {
                        title: 'Enfermedad tratada',
                        moreInfo: 'Enfermedad X'
                    },
                    {
                        title: 'Enfermedad tratada',
                        moreInfo: 'Enfermedad X'
                    },                   {
                        title: 'Enfermedad tratada',
                        moreInfo: 'Enfermedad X'
                    }
                 ]}
                />
                <HideableCard 
                  setOpenCard={setOpenCard} 
                  openCardIndex={openCardIndex} 
                  index={2}
                  header={"Cosecha"} 
                  date={"10 de octubre"}
                  details={[
                    {
                        title: 'Tipo de cosecha',
                        moreInfo: 'Cosecha Z'
                    },
                    {
                        title: 'Tipo de cosecha',
                        moreInfo: 'Cosecha Z'
                    },
                    {
                        title: 'Tipo de cosecha',
                        moreInfo: 'Cosecha Z'
                    },
                    {
                        title: 'Tipo de cosecha',
                        moreInfo: 'Cosecha Z'
                    },
                    {
                        title: 'Tipo de cosecha',
                        moreInfo: 'Cosecha Z'
                    }
                 ]}
                />
            </View>
        </ScrollView>
    )
}


export default ToDos;

