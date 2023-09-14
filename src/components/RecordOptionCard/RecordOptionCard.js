import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import COLORS from "../../theme/colors";
import FONTS from "../../theme/fonts";

const RecordOptionCard = ({ item }) => {
  return (
    <Card style={{ flex: 1/2, height: 100, width: 160, marginBottom: 20, justifyContent: 'center' }}>
      <Card.Content>
        <View style={{ alignItems: "center", marginBottom: 5 }}>
          <Image source={item.imagePath} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ alignItems: "center", marginBottom: 5 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: FONTS.medium,
              color: COLORS.GREEN_1,
            }}
          >
            {item.label}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default RecordOptionCard;
