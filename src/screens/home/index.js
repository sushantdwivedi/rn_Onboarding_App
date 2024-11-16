import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {
  dashboardData,
  fetchDashboardData,
} from '../../redux/actions/dashboardAction';
import {GetProfile} from '../../redux/actions/authAction';
import Animated from 'react-native-reanimated';

function Box({subtitle, title}) {
  return (
    <View style={styles.boxMain}>
      <View style={styles.boxContainer}>
        <Text style={styles.boxTitle}>{title}</Text>
        <Text style={styles.boxSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const Home = props => {
  const {fetchDashboardData, dashboardData, profile, GetProfile, token} = props;
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchDashboardData();
    GetProfile();
    console.log('home Screen');
  }, [token]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchDashboardData().then(() => setRefreshing(false));
  };

  return (
    <Animated.ScrollView // Make the ScrollView animated
      style={styles.scroll}
      scrollEventThrottle={16} // Control scroll event frequency
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.primary]} // Customize the refresh control color
        />
      }>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.lightGray10}
        />
        <View style={styles.content}>
          <Text style={styles.greeting}>
            Hi {profile?.name?.split(' ')[0]}!
          </Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Add Restaurant')}
            style={styles.button}>
            <Text style={{fontSize: SIZES.width * 0.028, ...styles.buttonText}}>
              Add Restaurant{' '}
            </Text>
            <View style={styles.plusIconContainer}>
              <Image
                source={require('../../assets/image/plusIcon.png')}
                style={styles.plusIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.collectionContainer}>
          <View style={styles.iconContainer}>
            <FastImage
              source={require('../../assets/image/moneyCoinIcon.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.collectionTextContainer}>
            <Text style={{opacity: 0.5, ...styles.greeting}}>
              Total Collection
            </Text>
            <Text style={styles.greeting}>
              {dashboardData?.totalCollection}
            </Text>
          </View>
        </View>
        <View style={styles.boxMainContainer}>
          <Box
            subtitle={'Today’s Collection'}
            title={dashboardData?.todaysCollection}
          />
          <Box
            subtitle={'Today’s Incentive'}
            title={dashboardData?.todaysIntensive}
          />
          <Box
            subtitle={'Total Incentive'}
            title={dashboardData?.totalIntensive}
          />
          <Box
            subtitle={'Restaurants Covered'}
            title={dashboardData?.restaurantsCovered}
          />
        </View>
      </SafeAreaView>
    </Animated.ScrollView>
  );
};

const mapStateToProps = state => ({
  dashboardData: state.dashboard?.dashboardData,
  profile: state.auth?.profile,
  token: state.auth?.token,
});

const mapDispatchToProps = {
  fetchDashboardData,
  GetProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
