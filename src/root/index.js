import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/login';
import MainStack from '../navigation/mainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator();

const Root = ({token}) => {
  return (
    <Stack.Navigator>
      {!token ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom', // Animation option
          }}
        />
      ) : (
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom', // Animation option
          }}
        />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
});
const mapDispatchToProps = dispatch => ({
  // dispatch mapping
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
// export default Root;
