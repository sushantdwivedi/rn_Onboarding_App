import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, SIZES} from '../../constants';
import HexagonSvgIcon from '../../components/HexagonSvgIcon';
import Home from '../../screens/home';
import Target from '../../screens/target';
import ProfileStack from '../ProfileStack';
import RestaurantTab from '../RestaurantTab';
import Profile from '../../screens/profile';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

// Define your custom header
function HeaderHeader() {
  return (
    <View style={styles.headerApnaThali}>
      <Image
        source={require('../../assets/image/apnaThaliLogo.png')}
        style={styles.image}
      />
      <Text style={{color: COLORS.black, ...styles.title}}>Apna</Text>
      <Text style={{color: COLORS.primary, ...styles.title}}>Thali</Text>
    </View>
  );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const navigation = useNavigation();
  const route = useRoute();
  const tabHiddenRoutes = ['Home', 'Restaurants', 'Target']; // Define routes to hide tab bar

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  // Define your custom bottom tab navigator
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../../assets/image/home.png'); // Same icon for both focused and unfocused
          } else if (route.name === 'Restaurants') {
            iconName = focused
              ? require('../../assets/image/MealFocus.png')
              : require('../../assets/image/mealIcon.png');
          } else if (route.name === 'Target') {
            iconName = focused
              ? require('../../assets/image/targetFocus.png')
              : require('../../assets/image/target.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../../assets/image/profileFocus.png')
              : require('../../assets/image/profile.png');
          }

          return (
            <HexagonSvgIcon
              focused={focused}
              iconName={iconName}
              label={route.name}
            />
          );
        },

        tabBarShowLabel: false,
        tabBarStyle: {
          height: SIZES.height * 0.1,
          backgroundColor: COLORS.lightGray10,
          elevation: 3, // Prevent extra elevation
          shadow: false, // Remove shadow
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HeaderHeader />,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantTab}
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>
                Onboarding Restaurant Status
              </Text>
            </View>
          ),
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        }}
      />
      <Tab.Screen
        name="Target"
        component={Target}
        // options={({route}) => {
        //   const focusedRouteName = getFocusedRouteNameFromRoute(route);
        //   if (focusedRouteName === 'Target') {
        //     return {
        //       tabBarStyle: {display: 'flex'},
        //       headerShown: false,
        //     };
        //   }

        //   return {
        //     tabBarStyle: {display: 'none'},
        //     headerShown: false,
        //   };
        //   //   headerShown: false,
        // }}
        options={({navigation}) => ({
          headerTitle: () => (
            // <Animated.View
            //   style={{
            //     transform: [{translateY}],
            //     // opacity: buttonOpacity,
            //     zIndex: 1,
            //   }}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Target</Text>
            </View>
            // </Animated.View>
          ),

          // headerShown: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Profile</Text>
            </View>
          ),
          //   headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        })}
      />
    </Tab.Navigator>
  );
}

// Main BottomTab
export default function BottomTab() {
  return (
    // <Animated.View>
    <TabNavigator />
    // {/* </Animated.View> */}
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: SIZES.height * 0.086, // 69

    borderTopLeftRadius: SIZES.width * 0.051, //20

    borderTopRightRadius: SIZES.width * 0.051, //20

    paddingHorizontal: SIZES.width * 0.028, //10

    paddingVertical: SIZES.height * 0.0062, //5

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.width * 0.014, //5

    borderRadius: SIZES.width * 0.028, //10

    paddingVertical: SIZES.height * 0.0062, //5
  },
  shadow: {
    shadowColor: COLORS.orange2,
    shadowOffset: {
      width: SIZES.width * 0.028, //10

      height: SIZES.height * 0.0125, //10
    },
    // shadowOpacity: 1,
    shadowRadius: 3.5,
  },
  image: {
    alignSelf: 'center',
    width: SIZES.width * 0.065, //25
    height: SIZES.width * 0.065, //25
    resizeMode: 'contain',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SIZES.width * 0.051, //20

    alignContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.68,
    height: SIZES.height * 0.05,
    // backgroundColor: 'blue',
  },
  title: {
    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.042, //16

    color: COLORS.black,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.028, //10

    color: COLORS.black,
    textTransform: 'capitalize',
  },
  rightHeader: {
    flexDirection: 'row',
    height: SIZES.height * 0.05,
    alignItems: 'flex-start',
    gap: SIZES.width * 0.028, //10

    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    width: SIZES.width * 0.103, //40

    height: SIZES.width * 0.103, //40

    resizeMode: 'contain',
  },
  title: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    fontFamily: FONTS.LexBold,
    fontSize: SIZES.width * 0.063, //24
    textAlign: 'center',
    // color: COLORS.black,
    // backgroundColor: COLORS.orange2,
  },
  headerStyle: {
    backgroundColor: COLORS.lightGray10,
  },

  headerText: {
    // backgroundColor: 'red',
    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.056, //20

    color: COLORS.black,
    textAlign: 'center',
  },
  headerContainer: {
    width: SIZES.width,
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerApnaThali: {
    width: SIZES.width,
    // backgroundColor: 'red',
    marginLeft: SIZES.width * 0.01, //309
    // backgroundColor: COLORS.orange2,

    flexDirection: 'row',
    gap: SIZES.width * 0.02, //7
  },
});
