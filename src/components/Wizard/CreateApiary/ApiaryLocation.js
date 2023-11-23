import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import { GET_ZONAS_SUGERIDAS } from '../../../graphql/queries/index';
import { useSnackbar } from '../../../context/SnackbarContext';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styled from 'styled-components/native';
import BEE_ICON from '../../../../assets/icon4.png';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton } from '../../../elements/Button/Button'
import TextInput from '../../../elements/TextInput/index';
import Menu from '../../../components/Menu/index'
import { BUENOS_AIRES_COORD, LATITUD_DELTA, LONGITUD_DELTA, AV_CORRIENTES_COORD } from './useCreateApiary';
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import {
  Label,
  LabelContainer,
} from '../../../elements/TextInput/TextInput.styles';
import Dots from '../../../components/Dots/index'

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
  const mapViewRef = useRef(null);
  const { data, loading } = useQuery(GET_ZONAS_SUGERIDAS, { fetchPolicy: "cache-and-network" });
  const [markerCoords, setMarkerCoords] = useState(BUENOS_AIRES_COORD);
  const [mapInitialized, setMapInitialized] = useState(false);

  const { showSnackbar } = useSnackbar();

  const { height } = Dimensions.get('window');

  const zonaSugeridas = data?.zonasSugeridas;
  console.log(zonaSugeridas);

  const {
    address,
    region,  
  } = wizardState?.fields; 
  
  useEffect(() => {
    if (region?.latitude !== AV_CORRIENTES_COORD.latitude &&
        region?.longitude !== AV_CORRIENTES_COORD.longitude &&
        region?.longitude !== BUENOS_AIRES_COORD.longitude &&
        region?.latitude !== BUENOS_AIRES_COORD.longitude
      ) {
        mapViewRef.current.animateToRegion(region?.value);
    }
  }, []);


  useEffect(() => {
    if (address?.value) {
      ref.current?.setAddressText(address?.value);
    }
  }, [address?.value]);

  const renderSuggestedZones = () => {
    const suggestedZones = data?.zonasSugeridas.map((zona) => {
      return zona.coordenadas.map(coordenada => ({
        latitude: coordenada.coord1,
        longitude: coordenada.coord2,
      }))
    });

    return suggestedZones.map((zone, index) => (
      <Polygon
        key={index}
        coordinates={zone}
        fillColor="rgba(100, 100, 255, 0.5)" 
        strokeColor="rgba(0, 0, 255, 1)" 
        strokeWidth={2} 
      />
    ));
  };

  const onAddressSelect = (details) => {
    
    if (details) {
      const latitude = details.geometry.location.lat;
      const longitude = details.geometry.location.lng;

      const region = {
        latitude,
        longitude,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUD_DELTA,
      };

      mapViewRef.current.animateToRegion(region);

      wizardStateSetters?.updateField({ name: "region", value: region });
      wizardStateSetters?.updateField({ name: "address", value: details.formatted_address });
    }
  }

  const onRegionChange = async (region) => {
    
    // Por alguna razon se llama en el primer render con la coordenada AV_CORRIENTES, por eso agrego esta condicion al if
    if (mapInitialized && 
        region?.latitude !== AV_CORRIENTES_COORD.latitude && 
        region?.longitude !== AV_CORRIENTES_COORD.longitude 
    ) {
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${API_KEY}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === 'OK') {
        const formattedAddress = data.results[0].formatted_address;
        // setAddress(formattedAddress);
        wizardStateSetters?.updateField({ name: "address", value: formattedAddress });
        const newRegion = {
          ...region,
          latitudeDelta: LATITUD_DELTA,
          longitudeDelta: LONGITUD_DELTA,
        }
        wizardStateSetters?.updateField({ name: "region", value: newRegion });
      }
    }
  }

    // Funciones para actualizar las coordenadas de latitud y longitud
    const updateLatitude = (latitude) => {
      if (latitude !== "-" && latitude) {
        const newRegion = {
          ...markerCoords,
          latitude: parseFloat(latitude),
          latitudeDelta: LATITUD_DELTA,
          longitudeDelta: LONGITUD_DELTA,
        };

        setMarkerCoords(newRegion); // Actualiza la posición del marcador en el mapa
        wizardStateSetters?.updateField({ name: "region", value: newRegion });
        mapViewRef.current.animateToRegion(newRegion);
      }
      
    }
  
  const updateLongitude = (longitude) => {
      if (longitude !== "-" && longitude) {
        const newRegion = {
          ...markerCoords,
          longitude: parseFloat(longitude),
          latitudeDelta: LATITUD_DELTA,
          longitudeDelta: LONGITUD_DELTA,
        };
        setMarkerCoords(newRegion); 
        wizardStateSetters?.updateField({ name: "region", value: newRegion });
        mapViewRef.current.animateToRegion(newRegion);
      }
  }
  

  const handleSubmit = () => {
    
    if (wizardState?.fields?.apiaryName?.value && wizardState?.fields?.environment?.value) {
      // setWizardPage('ApiaryEnvironment');
      wizardState?.onSubmit();
    } else if (!wizardState?.fields?.apiaryName?.value || !wizardState?.fields?.environment?.value ) {
        showSnackbar("Error de Validacion!", "Corriga los errores");
    }
  }




  return (
    <Container>
      <MainContentContainer>
        <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Dots 
                      pages={[
                        {
                          onPress: () => setWizardPage('ApiarySetup'),
                          actualPage: false
                        },
                        {
                          onPress: () => setWizardPage('ApiaryEnvironment'),
                          actualPage: false
                        },
                        {
                          onPress: () => setWizardPage('ApiaryLocation'),
                          actualPage: true
                        }
                      ]}
                    />
                </View>
 
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1, height: height / 4 }}>
                    <MapView
                      ref={mapViewRef}
                      style={{ width: '100%', height: '100%' }}
                      provider={PROVIDER_GOOGLE}
                      onRegionChangeComplete={(region) => onRegionChange(region)}
                      onRegionChange={(region) => setMarkerCoords(region) }
                      onMapReady={() => setMapInitialized(true)}
                      region={BUENOS_AIRES_COORD}
                      customMapStyle= {mapCustomStyle}
                    >
                      {!loading ? renderSuggestedZones() : null}
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
                          outlined={true}
                          onChangeText={(text) => updateLatitude(text)}
                          value={region.value.latitude.toString()}
                          keyboardType="numeric"
                        />
                      </View>

                      <View style={{ flex: 0.5 }}>
                        <TextInput
                          autoCapitalize="none"
                          autoCorrect={false}
                          label='Longitud'
                          onBlur={() => {}}
                          outlined={true}
                          onChangeText={(text) => updateLongitude(text)}
                          value={region.value.longitude.toString()}
                          keyboardType="numeric"
                        />
                      </View>
                    </View>
                  </View>


                  <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                    <ContainedButton 
                      disabled={false}
                      onSubmit={handleSubmit}
                      label="Crear Apiario"
                      icon={ wizardState?.mutationLoading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
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