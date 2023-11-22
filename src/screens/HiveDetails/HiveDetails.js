import React from 'react';
import styled from 'styled-components/native';
import { Image, View, Text, ScrollView } from "react-native";
import { Card } from 'react-native-paper';
import { useQuery } from "@apollo/client";
import { useRoute } from '@react-navigation/native';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Loading from '../../components/Loading/index';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { GET_COLMENA } from '../../graphql/queries';
import { formatDate } from '../../utils/helpers';
import { MenuContainer, MainContentContainer } from '../sharedStyles';

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const HiveDetails = () => {
  
  const route = useRoute();
  const { colmenaId } = route.params;
  const { data, loading } = useQuery(GET_COLMENA, { variables: { id: colmenaId },  fetchPolicy: "cache-and-network" });

  const colmena = data?.colmena;

  return (
    <Container>
      <MainContentContainer>

        {
          loading
          ? <Loading size={50} />
          : (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Image
                      source={require('../../../assets/hive4.png')} 
                      style={{ width: 100, height: 100 }} 
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        paddingTop: 10,
                        fontFamily: FONTS.medium,
                        color: COLORS.GREEN_1,
                        textTransform: 'capitalize',
                      }}
                    >
                      {colmena?.nombre}
                    </Text>
                </View>


                <View style={{ flex: 0.6, alignItems: 'center', marginTop: 20 }}>
                    <View style={{ alignSelf: 'left', marginLeft: 60, marginBottom: 12 }}>
                        <Text style={{ color: COLORS.GREEN_2, fontSize: 15, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                            Detalles de Colmena
                        </Text>
                    </View> 
                    
                    <Card style={{ width: '70%'}}>
                        <Card.Content>
                          <ScrollView>
                            
                            {
                              data?.colmena?.datos_fecha_establecimiento
                              ? <View>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Fecha de establecimiento
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                                        {formatDate(data?.colmena?.datos_fecha_establecimiento)}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }

                            {               
                              data?.colmena?.tipo
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Tipo colmena
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize'}}>
                                        {data?.colmena?.tipo}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }

                            {               
                              data?.colmena?.datos_color
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Color colmena
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize' }}>
                                        {data?.colmena?.datos_color}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }

                            {               
                              data?.colmena?.datos_origen
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Origen colmena
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                                        {formatDate(data?.colmena?.datos_origen)}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }


                            {               
                              data?.colmena?.reina_tipo
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Tipo reina
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize'}}>
                                        {data?.colmena?.reina_tipo}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }


                            {               
                              data?.colmena?.reina_color
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Color reina
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize' }}>
                                        {data?.colmena?.reina_color}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }

                            {               
                              data?.colmena?.reina_fecha_aceptacion
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Fecha aceptacion reina
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize' }}>
                                        {formatDate(data?.colmena?.reina_fecha_aceptacion)}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }

                            {               
                              data?.colmena?.reina_notas
                              ? <View style={{ marginTop: 10 }}>
                                  <View>
                                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                        Notas reina
                                    </Text>
                                  </View>

                                  <View style={{ marginTop: 3 }}>
                                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular, textTransform: 'capitalize' }}>
                                        {data?.colmena?.reina_notas}
                                    </Text>
                                  </View>
                                </View>
                              : ''
                            }


                          </ScrollView>
                        </Card.Content> 
                    </Card>
                </View>
        </View>
          )
        }
        

      </MainContentContainer>
      
      <View>
        <FabMenu />
      </View>
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default HiveDetails;