import React from "react";
import { ScrollView, View, Button, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { MainContentContainer, Content } from "../../screens/sharedStyles";
import COLORS from "../../theme/colors";
import FONTS from "../../theme/fonts";

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Record = () => {
  return (
    <Container>
      <MainContentContainer>
        <Content>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ marginBottom: 20, marginTop: 40 }}>
              <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                Select a record type
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/hive4.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Document flora
                    </Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/alimentacion2-removebg-preview.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Feed bees
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/varroa-removebg-preview.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Mite assessment
                    </Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/tratamiento-removebg-preview.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Treatment
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/muerte-removebg-preview.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Harvest honey
                    </Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ height: 150, flexDirection: "row", margin: 15 }}>
                <Card.Content
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1000,
                  }}
                >
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Image
                      source={require("../../../assets/hibernacion-removebg-preview.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                      }}
                    >
                      Winterize
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </ScrollView>
        </Content>
      </MainContentContainer>
    </Container>
  );
};

export default Record;
