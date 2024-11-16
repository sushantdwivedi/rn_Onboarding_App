import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/profile';
import {COLORS, FONTS, SIZES} from '../../constants';
import profileEdit from '../../screens/profile/ProfileEdit';
import HeaderBack from '../../components/HeaderBack';
import HeaderText from '../../components/HeaderTitle';
import ProfileEdit from '../../screens/profile/ProfileEdit';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitle: () => (
            <>
              <Text style={styles.headerText}>Profile</Text>
            </>
          ),
          //   headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        })}
      />
      {/* <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={({navigation}) => ({
          headerTitle: () => <HeaderText>Profile Edit</HeaderText>,
          headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: styles.headerStyle,
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({
  headerStyle: {
    // padding: 0,
    // margin: 0,
    backgroundColor: COLORS.lightGray10,
    // elevation: 0,
    // fontFamily: FONTS.LexMedium,
    // fontSize: SIZES.width * 0.056, //20

    // color: COLORS.black,
    // textAlign: 'center',
  },
  headerText: {
    // backgroundColor: 'red',
    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.056, //20

    color: COLORS.black,
    textAlign: 'center',
  },
});
