import Geolocation from 'react-native-geolocation-service';
import {CURRENT_COORDINATES} from '../redux/types';
import Geocoder from 'react-native-geocoder-reborn';
import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import {
  requestNotifications,
  RESULTS,
  request,
  PERMISSIONS,
  check,
} from 'react-native-permissions';

// const checkAndRequestPermission = async (permissionType) => {
//   const result = await check(permissionType);
//   if (result === RESULTS.DENIED) {
//     const requestResult = await request(permissionType);
//     return requestResult;
//   }
//   return result;
// };

// const recall = () => {
//   ImagePermission(type, isAllow, cb, false); // Recall the permission flow
// };

export const LocationPermission = async (
  data,
  isAllow,
  cb,
  repeat = true,
  recall,
) => {
  try {
    const granted =
      Platform.OS === 'android'
        ? await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          )
        : await Geolocation.requestAuthorization('whenInUse');
    console.log('permission ');
    isAllow && isAllow(granted);
    if (granted === 'granted') {
      cb && cb(true);
      Geolocation.getCurrentPosition(
        async position => {
          var NY = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // onSuccess({...NY, locality: res[0]});

          console.log(
            'lat',
            position.coords.latitude,
            'lng',
            position.coords.longitude,
          );
          data && data({...NY});
          Geocoder.geocodePosition(NY).then(res => {
            data && data({...NY, locality: res[0]});
            cb && cb(false);
          });
        },
        error => {
          cb && cb(false);
          console.log('error', error, error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
      );
    } else {
      if (repeat) {
        Alert.alert(
          'Location permission',
          'Location permission is blocked in the device ' +
            'settings. Allow the app to access location',
          console.log('cancel'),
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Open Setting',
              onPress: () =>
                Linking.openSettings().finally(() => {
                  setTimeout(() => {
                    // permission((data) => setLoadingIndicator(data), false)
                    recall && recall();
                  }, 1000);
                }),
            },
          ],
        );
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    }
  } catch (err) {
    cb && cb(false);
    console.log('err', err);
  }
};

// Custom function to check and request Image permission
export const ImagePermission = async () => {
  try {
    if (Platform.OS === 'android') {
      // Check both Camera and Gallery permissions for Android
      const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
      const galleryPermission = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );

      // Request permissions if not granted
      if (
        cameraPermission !== RESULTS.GRANTED ||
        galleryPermission !== RESULTS.GRANTED
      ) {
        const newCameraPermission = await request(PERMISSIONS.ANDROID.CAMERA);
        const newGalleryPermission = await request(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );

        if (
          newCameraPermission === RESULTS.GRANTED &&
          newGalleryPermission === RESULTS.GRANTED
        ) {
          return true; // Both permissions granted
        } else if (
          newCameraPermission === RESULTS.BLOCKED ||
          newGalleryPermission === RESULTS.BLOCKED
        ) {
          // Handle case where permission is permanently denied (blocked)
          showSettingsAlert();
          return false;
        } else {
          return false; // Permission denied
        }
      }

      return true; // Permissions already granted
    } else {
      // iOS permissions (if applicable)
      const cameraPermission = await check(PERMISSIONS.IOS.CAMERA);
      const galleryPermission = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);

      if (
        cameraPermission !== RESULTS.GRANTED ||
        galleryPermission !== RESULTS.GRANTED
      ) {
        const newCameraPermission = await request(PERMISSIONS.IOS.CAMERA);
        const newGalleryPermission = await request(
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        );

        if (
          newCameraPermission === RESULTS.GRANTED &&
          newGalleryPermission === RESULTS.GRANTED
        ) {
          return true;
        } else if (
          newCameraPermission === RESULTS.BLOCKED ||
          newGalleryPermission === RESULTS.BLOCKED
        ) {
          // Handle case where permission is permanently denied (blocked)
          showSettingsAlert();
          return false;
        } else {
          return false;
        }
      }

      return true; // Permissions already granted
    }
  } catch (error) {
    console.warn('Permission request error: ', error);
    return false;
  }
};

// Function to show alert with button to navigate to settings
const showSettingsAlert = () => {
  Alert.alert(
    'Permission Required',
    'Please enable permissions in the app settings to access the camera or gallery.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: () => Linking.openSettings(),
      },
    ],
    {cancelable: false},
  );
};

// Image permission handler
// export const ImagePermission = async (
//   type = 'camera',
//   isAllow,
//   cb,
//   repeat = true,
//   recall,
// ) => {
//   try {
//     const permissionType =
//       type === 'camera'
//         ? Platform.OS === 'android'
//           ? PERMISSIONS.ANDROID.CAMERA
//           : PERMISSIONS.IOS.CAMERA
//         : Platform.OS === 'android'
//         ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//         : PERMISSIONS.IOS.PHOTO_LIBRARY;

//     const granted = await request(permissionType);
//     console.log('Image permission status: ', granted);
//     isAllow && isAllow(granted);

//     if (granted === RESULTS.GRANTED) {
//       cb && cb(true);

//       // Launch camera or image library
//       if (type === 'camera') {
//         launchCamera({mediaType: 'photo'}, response => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.errorCode) {
//             console.log('Image picker error', response.errorMessage);
//           } else {
//             console.log('Image data: ', response.assets);
//           }
//           cb && cb(false);
//         });
//       } else {
//         launchImageLibrary({mediaType: 'photo'}, response => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.errorCode) {
//             console.log('Image picker error', response.errorMessage);
//           } else {
//             console.log('Image data: ', response.assets);
//           }
//           cb && cb(false);
//         });
//       }
//     } else {
//       handlePermissionDenial(repeat, cb, recall, 'Image');
//     }
//   } catch (err) {
//     cb && cb(false);
//     console.log('Image permission error', err);
//   }
// };

// export const ImagePermission = async (
//   type = 'camera',
//   isAllow,
//   cb,
//   repeat = true,
//   recall,
// ) => {
//   try {
//     // Determine the permission type based on the platform and the type of permission needed
//     const permissionType =
//       type === 'camera'
//         ? Platform.OS === 'android'
//           ? PERMISSIONS.ANDROID.CAMERA
//           : PERMISSIONS.IOS.CAMERA
//         : Platform.OS === 'android'
//         ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//         : PERMISSIONS.IOS.PHOTO_LIBRARY;

//     // Request permission
//     const granted = await request(permissionType);
//     console.log(`${type} permission status: `, granted);

//     isAllow && isAllow(granted);

//     if (granted === RESULTS.GRANTED) {
//       cb && cb(true);

//       // Launch camera or image library based on the type
//       if (type === 'camera') {
//         launchCamera({mediaType: 'photo'}, response => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.errorCode) {
//             console.log('Image picker error', response.errorMessage);
//           } else {
//             console.log('Image data: ', response.assets);
//           }
//           cb && cb(false);
//         });
//       } else {
//         launchImageLibrary({mediaType: 'photo'}, response => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.errorCode) {
//             console.log('Image picker error', response.errorMessage);
//           } else {
//             console.log('Image data: ', response.assets);
//           }
//           cb && cb(false);
//         });
//       }
//     } else {
//       // Handle permission denial and prompt user to open settings
//       handlePermissionDenial(repeat, cb, recall, 'Image');
//     }
//   } catch (err) {
//     cb && cb(false);
//     console.log('Image permission error', err);
//   }
// };

// // Handle permission denial
// const handlePermissionDenial = (repeat, cb, recall, type) => {
//   if (repeat) {
//     Alert.alert(
//       `${type} permission`,
//       `${type} permission is blocked in the device settings. Allow the app to access ${type.toLowerCase()}.`,
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'Open Setting',
//           onPress: () =>
//             Linking.openSettings().finally(() => {
//               setTimeout(() => {
//                 recall && recall();
//               }, 1000);
//             }),
//         },
//       ],
//     );
//     cb && cb(false);
//   } else {
//     cb && cb(false);
//   }
// };

// export const NotificationsPermission = (
//   openSettingsCondtion = false,
//   recall,
//   statusCb,
// ) => {
//   requestNotifications(['alert', 'sound', 'badge', 'criticalAlert']).then(
//     ({status, settings}) => {
//       console.log(status);
//       statusCb && statusCb(status);
//       switch (status) {
//         case RESULTS.UNAVAILABLE:
//           console.log(
//             'This feature is not available (on this device / in this context)',
//           );
//           // requestNotifications()
//           break;
//         case RESULTS.DENIED:
//           console.log(
//             'The permission has not been requested / is denied but requestable',
//           );
//           // requestNotifications()
//           break;
//         case RESULTS.LIMITED:
//           console.log('The permission is limited: some actions are possible');
//           // requestNotifications()
//           break;
//         case RESULTS.GRANTED:
//           console.log('The permission is granted');
//           break;
//         case RESULTS.BLOCKED:
//           if (openSettingsCondtion) {
//             Alert.alert(
//               'Notification permission',
//               'Notification permission is blocked in the device ' +
//                 'settings. Allow the app to access notification',
//               [
//                 {
//                   text: 'Cancel',
//                   onPress: () => console.log('Cancel Pressed'),
//                   style: 'cancel',
//                 },
//                 {
//                   text: 'Open Setting',
//                   onPress: () =>
//                     Linking.openSettings().finally(() => {
//                       setTimeout(() => {
//                         // notification(false)
//                         recall && recall(true);
//                       }, 1000);
//                     }),
//                 },
//               ],
//             );
//           }

//           break;
//       }
//     },
//   );
// };

// import {PermissionsAndroid, Platform, Alert, Linking} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// // import AndroidOpenSettings from 'react-native-android-open-settings'; // You'll need to install this package
// // import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';

// export const LocationPermission = async () => {
//   try {
//     if (Platform.OS === 'ios') {
//       const permissionStatus = await check(
//         PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//       );
//       if (permissionStatus === RESULTS.GRANTED) {
//         console.log('You can use the location');
//         getLocation();
//       } else if (permissionStatus === RESULTS.DENIED) {
//         const requestStatus = await request(
//           PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//         );
//         if (requestStatus === RESULTS.GRANTED) {
//           console.log('You can use the location');
//           getLocation();
//         } else {
//           console.log('Location permission denied');
//           showLocationDeniedAlert();
//         }
//       } else if (permissionStatus === RESULTS.BLOCKED) {
//         showLocationDeniedAlert();
//       }
//     } else if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Permission',
//           message: 'This app needs access to your location.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the location');
//         getLocation();
//       } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
//         console.log('Location permission denied');
//         showLocationDeniedAlert();
//       } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//         console.log('Location permission denied permanently');
//         showLocationDeniedAlert();
//       }
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// const showLocationDeniedAlert = () => {
//   Alert.alert(
//     'Location Permission',
//     'Location access is required for this feature. Please enable it in the settings.',
//     [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Open Settings',
//         onPress: () => {
//           if (Platform.OS === 'android') {
//             // AndroidOpenSettings.locationSourceSettings();
//             console.log('settings open for location');
//           } else {
//             Linking.openURL('app-settings:');
//           }
//         },
//       },
//     ],
//   );
// };

// const getLocation = () => {
//   Geolocation.getCurrentPosition(
//     position => {
//       console.log('Position:', position);
//       // Handle the location data here
//     },
//     error => {
//       console.log('Error:', error);
//       if (error.code === 2 && error.message.includes('provider')) {
//         showLocationServicesAlert();
//       }
//     },
//     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//   );
// };

// const showLocationServicesAlert = () => {
//   Alert.alert(
//     'Enable Location Services',
//     'Your location services are disabled. Please enable them to continue.',
//     [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Enable',
//         onPress: async () => {
//           if (Platform.OS === 'android') {
//             // const enableResult = await promptForEnableLocationIfNeeded();
//             // console.log('enableResult', enableResult);
//             console.log('settings open for location');
//           } else {
//             Linking.openURL('App-Prefs:root=Privacy&path=LOCATION');
//           }
//         },
//       },
//     ],
//   );
// };
