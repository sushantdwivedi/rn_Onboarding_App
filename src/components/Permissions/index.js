// PermissionHandler.js
import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert, Linking} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export const PermissionHandler = ({type, onPermissionGranted}) => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    let permission;
    switch (type) {
      case 'location':
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
        break;
      case 'camera':
        permission = PERMISSIONS.ANDROID.CAMERA;
        break;
      case 'gallery':
        permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
        break;
      default:
        return;
    }

    const result = await check(permission);
    handlePermissionResult(result, permission);
  };

  const requestPermission = async permission => {
    const result = await request(permission);
    handlePermissionResult(result, permission);
  };

  const handlePermissionResult = (result, permission) => {
    setPermissionStatus(result);
    switch (result) {
      case RESULTS.GRANTED:
        onPermissionGranted();
        break;
      case RESULTS.DENIED:
        Alert.alert(
          'Permission Denied',
          'This feature requires permission to proceed.',
          [
            {text: 'Cancel', style: 'cancel'},
            {
              text: 'Request Again',
              onPress: () => requestPermission(permission),
            },
          ],
        );
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Permission Blocked',
          'Please enable the permission from settings to proceed.',
          [{text: 'Open Settings', onPress: () => openSettings()}],
        );
        break;
      case RESULTS.UNAVAILABLE:
        Alert.alert(
          'Feature Unavailable',
          'This feature is not available on your device.',
        );
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Text>Current Permission Status: {permissionStatus}</Text>
    </View>
  );
};
