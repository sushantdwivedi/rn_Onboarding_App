import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS, FONTS, SIZES} from '../../constants';
import Geocoder from 'react-native-geocoder-reborn';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

import SimpleButton from '../simpleButton';
import {LocationPermission} from '../../services/permissions';

const GetLocationOnMaps = () => {
  const route = useRoute();
  const {passCode, targetD} = route.params;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const _mapRef = React.useRef();
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 23.259933, // Default coordinates (initially set to a static location)
    longitude: 77.412613,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Fetch current location on component mount
    LocationPermission(data => {
      console.log('Location data received:', data); // Log location data
      if (data) {
        // Set the new region with updated lat/lng for the current location
        setRegion({
          latitude: data?.lat,
          longitude: data?.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        fetchAddress(data?.lat, data?.lng); // Fetch and set the address for the current location
      }
    });
  }, []);

  // Function to fetch address using lat/lng
  const fetchAddress = async (latitude, longitude) => {
    setLoading(true);
    try {
      const geocodeResult = await Geocoder.geocodePosition({
        lat: latitude,
        lng: longitude,
      });
      if (geocodeResult.length > 0) {
        setAddress(geocodeResult[0].formattedAddress);
      }
    } catch (error) {
      console.log('Geocoding error:', error);
      Alert.alert('Error', 'Unable to get address from location');
    } finally {
      setLoading(false);
    }
  };

  // Function called when the map region changes
  const onRegionChangeComplete = async newRegion => {
    setRegion(newRegion); // Update region state with new lat/lng
    setLoading(true);
    try {
      const geocodeResult = await Geocoder.geocodePosition({
        lat: newRegion?.latitude,
        lng: newRegion?.longitude,
      });
      if (geocodeResult.length > 0) {
        setAddress(geocodeResult[0].formattedAddress);
      }
    } catch (error) {
      console.log('Geocoding error:', error);
      Alert.alert('Error', 'Unable to get address from marker location');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray10}}>
      <MapView
        style={{height: SIZES.height * 0.72}}
        ref={_mapRef}
        initialRegion={region} // The region now reflects the user's current location
        region={region} // Keep updating the map with the current region
        onRegionChangeComplete={onRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton>
        <Marker
          draggable={true}
          coordinate={{
            latitude: region?.latitude,
            longitude: region?.longitude,
          }}
        />
      </MapView>
      {/*
      {loading && (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={{position: 'absolute', top: '50%', alignSelf: 'center'}}
        />
      )} */}

      {address && (
        <View
          style={{alignSelf: 'center', marginTop: 10, marginHorizontal: 15}}>
          <Text
            style={{
              fontSize: SIZES.width * 0.038,
              fontFamily: FONTS.LexRegular,
              color: COLORS.black,
            }}>
            Address: {address}
          </Text>
        </View>
      )}

      <SimpleButton
        onPress={() => {
          if (address) {
            if (passCode === 1) {
              navigation.navigate('MainStack', {
                screen: 'Add Restaurant',
                params: {
                  targetL: targetD,
                  selectedAddress: address,
                  coordinates: {
                    latitude: region?.latitude,
                    longitude: region?.longitude,
                  },
                },
              });
            }
            if (passCode === 2) {
              navigation.navigate('MainStack', {
                screen: 'Update Restaurant',
                params: {
                  selectedAddress: address,
                  coordinates: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                  },
                },
              });
            }
          } else {
            Alert.alert('No Address', 'Please select a location first.');
          }
        }}
        children="Confirm"
        containerStyle={{
          marginVertical: 26,
          alignSelf: 'center',
          borderRadius: 14,
          backgroundColor: COLORS.primary,
          width: SIZES.width * 0.9,
          justifyContent: 'center',
          height: SIZES.height * 0.06,
        }}
        style={{
          borderColor: COLORS.white,
          fontFamily: FONTS.semiBold,
          fontSize: 16,
          textAlign: 'center',
        }}
      />
    </View>
  );
};

export default GetLocationOnMaps;
