
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';
import { ROUTES } from '../../constants';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';


const InspectionStepCard = ({
    header,
    subtitle,
    onThumbDown,
    onThumbUp
}) => {
    return (
        <View>
            <Card
                style={{ 
                    height: 250,
                    width: 250,
                    marginTop: 12,
                    borderRadius: 1,
                }}
            >
                <Card.Content
                    style={{
                        height: '100%', 
                        backgroundColor: 'white'
                    }}>
                    <View style={{ alignItems: 'center', marginBottom: 5, flex: 0.2 }}>
                        <Text style={{ fontSize: 18, color: COLORS.GREEN_3, fontFamily: FONTS.medium }}>
                            {header}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 0.3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: COLORS.BLACK_3, fontFamily: FONTS.regular }}>
                            {subtitle}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            style={{
                                width: 55,
                                height: 55,
                                backgroundColor: COLORS.RED_3,
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={onThumbDown}
                        >
                            <Icon size={26} name="ri-thumb-down-line" color={COLORS.WHITE} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                width: 55,
                                height: 55,
                                backgroundColor: COLORS.GREEN_4,
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={onThumbUp}
                        >
                            <Icon size={26} name="ri-thumb-up-line" color={COLORS.WHITE} />
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

export default InspectionStepCard;