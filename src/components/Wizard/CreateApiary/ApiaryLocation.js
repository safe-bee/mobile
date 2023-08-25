import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styled from 'styled-components/native';
import BEE_ICON from '../../../../assets/icon.png';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton } from '../../../elements/Button/Button'
import TextInput from '../../../elements/TextInput/index';
import Menu from '../../../components/Menu/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import {
  Label,
  LabelContainer,
} from '../../../elements/TextInput/TextInput.styles';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;


const API_KEY = 'AIzaSyBLvdgQVmSXzKVWWbIg8eCwoXZF7hGS3rU';

const mapCustomStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
]


const ApiaryLocation = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

  const ref = useRef();
  const [domainVars, setDomainVars] = useState('hi'); 
  const [address, setAddress] = useState('Buenos Aires, Argentina'); 
  const [coordinate, setCoordinate] = useState({"latitude": -34.6038188, "latitudeDelta": 0.04389558785065617, "longitude": -58.3793510, "longitudeDelta": 0.06694793701170454 }); 
  const [markerCoords, setMarkerCoords] = useState({"latitude": -34.6038188, "latitudeDelta": 0.04389558785065617, "longitude": -58.3793510, "longitudeDelta": 0.06694793701170454 }); 
  const { height } = Dimensions.get('window');



  
  useEffect(() => {
    ref.current?.setAddressText(address);
  }, []);

  useEffect(() => {
    if (address) {
      ref.current?.setAddressText(address);
    }
  }, [address]);


  const onAddressSelect = (details) => {
    if (details) {
      const latitude = details.geometry.location.lat;
      const longitude = details.geometry.location.lng;

      // Definir las diferencias de latitud y longitud (ajustar estos valores según tus preferencias)
      const latitudeDelta = 0.05; // Por ejemplo, un zoom de 0.05
      const longitudeDelta = 0.05;

      const region = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      };

      setCoordinate(region); 
    }
  }

  const onRegionChange = async (region) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${API_KEY}`;

    console.log("region");
    console.log(region);
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK') {
      const formattedAddress = data.results[0].formatted_address;
      setAddress(formattedAddress);
      setCoordinate(region);
    }

  }

  return (
    <Container>
      <MainContentContainer>
        <Content>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

              <View style={{ flex: 1, height: height / 4 }}>
                <MapView
                  style={{ width: '100%', height: '100%' }}
                  provider={PROVIDER_GOOGLE}
                  onRegionChangeComplete={(region) => onRegionChange(region)}
                  onRegionChange={(region) => setMarkerCoords(region) }
                  region={{"latitude": -34.6038188, "latitudeDelta": 0.04389558785065617, "longitude": -58.3793510, "longitudeDelta": 0.06694793701170454 }}
                  customMapStyle= {mapCustomStyle}
                >
                   <Marker
                   draggable
                      image={BEE_ICON}
                      style={{ width: 10, height: 10 }} 
                      coordinate={{ latitude: markerCoords.latitude, longitude: markerCoords.longitude }}
                      title="Ubicación"
                      description="Descripción de la ubicación"
                  />
                </MapView>
              </View>

              <View style={{ flex: 1, marginTop: 30  }}>
                <View style={{ marginBottom: 20 }}> 
                  <LabelContainer>
                      <Label
                        color=''
                        fontFamily={FONTS.regular}
                      >
                        Direccion
                      </Label>
                  </LabelContainer>
                  <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder='Buscar una direccion'
                    onPress={(data, details = null) => {
                      onAddressSelect(details);
                    }}
                    query={{
                      key: API_KEY,
                      language: 'en',
                    }}
                    fetchDetails={true}
                    keyboardShouldPersistTaps="handled"
                    debounce={50}
                    textInputProps={{ 
                      style: {
                        backgroundColor: COLORS.BLUE_1,
                        width: '100%',
                        height: 45,
                        paddingLeft: 10,
                        borderColor: COLORS.BLUE_1,
                        borderWidth: 1,
                        borderRadius: 8, 
                       },
                       placeholderTextColor: COLORS.GREY_40
                    }}
                  />
                </View>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 0.5, paddingRight: 10 }}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      label='Latitud'
                      onBlur={() => {}}
                      icon="ri-pencil-fill"
                      outlined={true}
                      onChangeText={(text) => setDomainVars(text)}
                      value={coordinate.latitude.toString()}
                    />
                  </View>

                  <View style={{ flex: 0.5 }}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      label='Longitud'
                      onBlur={() => {}}
                      icon="ri-pencil-fill"
                      outlined={true}
                      onChangeText={(text) => setDomainVars(text)}
                      value={coordinate.longitude.toString()}
                    />
                  </View>
                </View>
              </View>


              <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                <ContainedButton 
                  disabled={false}
                  onSubmit={()=>{}}
                  label="Crear Apiario"
                />
              </View>
            </View>
          </ScrollView>

        </Content>
      </MainContentContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>

    </Container>
  )
}

export default ApiaryLocation;