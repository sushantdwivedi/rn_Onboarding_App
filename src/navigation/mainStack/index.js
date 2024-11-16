// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from '../../screens/login';
// import AddResturant from '../../screens/addResturant';
// import UpdateRestaurant from '../../screens/UpdateRestaurant';
// import HeaderText from '../../components/HeaderTitle';
// import HeaderBack from '../../components/HeaderBack';
// import {COLORS} from '../../constants';
// import BottomTab from '../BottomTab';
// import Profile from '../../screens/profile';
// import ProfileEdit from '../../screens/profile/ProfileEdit';
// import GetLocationOnMaps from '../../components/GetLocationOnMaps';

// const Stack = createNativeStackNavigator();

// const MainStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="BottomTab">
//       {/* <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       /> */}

//       <Stack.Screen
//         name="BottomTab"
//         component={BottomTab}
//         options={({navigation}) => ({
//           // headerTitle: () => <HeaderText>BottomTab</HeaderText>,
//           // headerLeft: () => (
//           //   <HeaderBack onPress={() => navigation.goBack()} />
//           // ),
//           headerShown: false,
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerStyle: styles.headerStyle,
//         })}
//       />
//       <Stack.Screen
//         name="Add Restaurant"
//         component={AddResturant}
//         options={({navigation}) => ({
//           headerTitle: () => <HeaderText>Add Restaurant</HeaderText>,
//           headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerStyle: styles.headerStyle,
//         })}
//       />
//       <Stack.Screen
//         name="Update Restaurant"
//         component={UpdateRestaurant}
//         options={({navigation}) => ({
//           headerTitle: () => <HeaderText>Update Restaurant</HeaderText>,
//           headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerStyle: styles.headerStyle,
//         })}
//       />
//       <Stack.Screen
//         name="GetLocationOnMaps"
//         component={GetLocationOnMaps}
//         options={({navigation}) => ({
//           headerTitle: () => <HeaderText>Locate On Maps</HeaderText>,
//           headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerStyle: styles.headerStyle,
//         })}
//       />
//       <Stack.Screen
//         name="ProfileEdit"
//         component={ProfileEdit}
//         options={({navigation}) => ({
//           headerTitle: () => <HeaderText>Profile Edit</HeaderText>,
//           headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerStyle: styles.headerStyle,
//         })}
//       />
//       {/* <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerShown: false}}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default MainStack;

// const styles = StyleSheet.create({
//   headerStyle: {
//     backgroundColor: COLORS.lightGray10,
//     // elevation: 0,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddResturant from '../../screens/addResturant';
import UpdateRestaurant from '../../screens/UpdateRestaurant';
import HeaderText from '../../components/HeaderTitle';
import HeaderBack from '../../components/HeaderBack';
import {COLORS} from '../../constants';
import BottomTab from '../BottomTab';
import ProfileEdit from '../../screens/profile/ProfileEdit';
import GetLocationOnMaps from '../../components/GetLocationOnMaps';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add Restaurant"
        component={AddResturant}
        options={({navigation}) => ({
          headerTitle: () => <HeaderText>Add Restaurant</HeaderText>,
          // headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerLeft: () => (
            <HeaderBack
              onPress={() => {
                setTimeout(() => {
                  navigation.goBack();
                }, 500); // 1000 ms = 1 second
              }}
            />
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
          animation: 'slide_from_bottom',
          presentation: 'modal',
        })}
      />
      <Stack.Screen
        name="Update Restaurant"
        component={UpdateRestaurant}
        options={({navigation}) => ({
          headerTitle: () => <HeaderText>Update Restaurant</HeaderText>,
          // headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerLeft: () => (
            <HeaderBack
              onPress={() => {
                setTimeout(() => {
                  navigation.goBack();
                }, 500); // 1000 ms = 1 second
              }}
            />
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
          animation: 'slide_from_bottom', // Animation option
        })}
      />
      <Stack.Screen
        name="GetLocationOnMaps"
        component={GetLocationOnMaps}
        options={({navigation}) => ({
          headerTitle: () => <HeaderText>Locate On Maps</HeaderText>,
          // headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerLeft: () => (
            <HeaderBack
              onPress={() => {
                setTimeout(() => {
                  navigation.goBack();
                }, 500); // 1000 ms = 1 second
              }}
            />
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
          animation: 'slide_from_right', // Slide from right
        })}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={({navigation}) => ({
          headerTitle: () => <HeaderText>Profile Edit</HeaderText>,
          // headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerLeft: () => (
            <HeaderBack
              onPress={() => {
                setTimeout(() => {
                  navigation.goBack();
                }, 500); // 1000 ms = 1 second
              }}
            />
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
          animation: 'slide_from_right', // Slide from left
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.lightGray10,
  },
});
