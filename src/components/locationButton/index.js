// import React, {useState, useEffect, useRef} from 'react';
// import {
//   TouchableOpacity,
//   Image,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   View,
//   Platform,
// } from 'react-native';
// import {SIZES, COLORS, FONTS} from '../../constants';
// import {LocationPermission} from '../../services/permissions';
// import {useDispatch} from 'react-redux';
// import MapView, {
//   Marker,
//   PROVIDER_DEFAULT,
//   PROVIDER_GOOGLE,
// } from 'react-native-maps';
// import Geocoder from 'react-native-geocoding';

// // Initialize Geocoder with your API key
// Geocoder.init('YOUR_GOOGLE_MAPS_API_KEY');

// const CurrentLocationButton = ({imageSource, buttonText, onPress, route}) => {
//   const data = route?.params;
//   const dispatch = useDispatch();
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [ddd, setDdd] = useState(null);

//   const _mapRef = useRef(null);

//   const [coordinates, setCoordinates] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   // UseEffect for updating map region
//   useEffect(() => {
//     if (ddd && ddd.lat && ddd.lng) {
//       _mapRef.current?.animateToRegion({
//         latitude: ddd.lat,
//         longitude: ddd.lng,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       });
//     } else {
//       console.warn('Invalid ddd coordinates:', ddd);
//     }
//   }, [ddd]);

//   // Region change handlers
//   const onRegionChange = region => {
//     setCoordinates(region);
//   };

//   const onRegionChangeComplete = region => {
//     const position = {
//       lat: region.latitude,
//       lng: region.longitude,
//     };
//     Geocoder.from(position)
//       .then(res => {
//         setLocation(res.results[0]);
//       })
//       .catch(err => console.log(err));
//   };

//   // Location permission handler
//   const locationsPermission = (repeat = false, loadingCon = false) => {
//     LocationPermission(
//       datas => {
//         setCoordinates({
//           latitude: datas?.lat,
//           longitude: datas?.lng,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         });
//         setLocation(datas?.locality);
//         setDdd(datas);
//       },
//       isAllow => {},
//       loadings => {
//         setLoading(loadings);
//       },
//       repeat,
//       () => {
//         locationsPermission();
//       },
//     );
//   };

//   return (
//     <TouchableOpacity
//       activeOpacity={0.6}
//       style={[styles.touchable, {backgroundColor: COLORS.white}]}
//       onPress={locationsPermission}>
//       <MapView
//         ref={_mapRef}
//         style={{flex: 1, width: SIZES.width}}
//         initialRegion={coordinates}
//         provider={
//           Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
//         }
//         onRegionChange={onRegionChange}
//         onRegionChangeComplete={onRegionChangeComplete}
//         zoomControlEnabled={true}>
//         <Marker coordinate={coordinates} title="marker" />
//       </MapView>
//       <Image source={imageSource} style={styles.image} />
//       {loading ? (
//         <ActivityIndicator size="small" color={COLORS.orange2} />
//       ) : (
//         <View style={styles.text}>
//           {location && location.formatted_address ? (
//             <Text style={styles.addressText}>
//               Your Address: {location.formatted_address}
//             </Text>
//           ) : (
//             <Text style={styles.text}>{buttonText}</Text>
//           )}
//         </View>
//       )}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   touchable: {
//     alignSelf: 'center',
//     marginTop: SIZES.height * 0.02,
//     width: SIZES.width * 0.87,
//     height: SIZES.height * 0.05,
//     borderRadius: SIZES.height * 0.009,
//     flexDirection: 'row',
//     elevation: 3,
//   },
//   image: {
//     width: SIZES.width * 0.051,
//     height: SIZES.width * 0.051,
//     alignSelf: 'center',
//     resizeMode: 'cover',
//     margin: 10,
//   },
//   text: {
//     color: COLORS.black,
//     fontFamily: FONTS.LexRegular,
//     fontSize: SIZES.width * 0.031,
//     marginLeft: 5,
//     alignSelf: 'center',
//   },
//   addressText: {
//     color: COLORS.black,
//     fontSize: SIZES.width * 0.035,
//     marginTop: 5,
//     marginBottom: 5,
//   },
// });

// // export default CurrentLocationButton;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder-reborn';
import {SIZES, COLORS, FONTS} from '../../constants';
import {current} from '@reduxjs/toolkit';
import MapView from 'react-native-maps';

// export const getLocationOnMaps = () => {
//   const [region, setRegion] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const onRegionChange = newRegion => {
//     setRegion(newRegion);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         style={{flex: 1}}
//         region={region}
//         onRegionChange={onRegionChange}
//       />
//       <View>
//         <Text>Hello world</Text>
//       </View>
//     </View>
//   );
// };

const CurrentLocationButton = ({imageSource, buttonText, type}) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        if (type === 'current') {
          console.log('current Location triggered');
          getCurrentLocation();
        } else if (type === 'onMaps') {
          console.log('On maps Location triggered');
          getLocationOnMaps();
        }
      } else {
        Alert.alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      async position => {
        setLocation(position);
        try {
          const geocodeResult = await Geocoder.geocodePosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log('geocodeResult', geocodeResult);
          if (geocodeResult.length > 0) {
            setAddress(geocodeResult[0].formattedAddress);
          }
        } catch (error) {
          console.log('Geocoding error:', error);
          Alert.alert('Error', 'Unable to get address from coordinates');
        } finally {
          setLoading(false);
        }
      },
      error => {
        console.log(error.message);
        Alert.alert('Error', error.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 10000,
      },
    );
  };

  const handlePress = () => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else if (type === 'current') {
      console.log('current Location triggered');
      getCurrentLocation();
    } else if (type === 'onMaps') {
      console.log('On maps Location triggered');
      getLocationOnMaps();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.touchable, {backgroundColor: COLORS.white}]}
      onPress={handlePress}
      // onPress={getCurrentLocation}
      // formatAddress={address}
    >
      <Image source={imageSource} style={styles.image} />
      {loading ? (
        <ActivityIndicator size="small" color={COLORS.orange2} />
      ) : (
        <View style={styles.text}>
          {address ? (
            <Text style={styles.text}>{address}</Text>
          ) : (
            <Text style={styles.text}>{buttonText}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'center',
    marginTop: SIZES.height * 0.02,
    width: SIZES.width * 0.87,
    // height: SIZES.height * 0.05,
    borderRadius: SIZES.height * 0.009,
    flexDirection: 'row',
    elevation: 3,
  },
  image: {
    width: SIZES.width * 0.051,
    height: SIZES.width * 0.051,
    alignSelf: 'center',
    resizeMode: 'cover',
    margin: SIZES.width * 0.028,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.031,
    width: SIZES.width * 0.75,
    padding: 5,

    marginLeft: 2,
    alignSelf: 'center',
  },
  addressText: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.035,
    // width: SIZES.width * 0.87,

    marginTop: SIZES.width * 0.014,
    marginBottom: SIZES.width * 0.014,
  },
});

export default CurrentLocationButton;
