import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  RefreshControl,
  Image,
  ActivityIndicator, // Import ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StatusCard from '../../components/StatusCard';
import {COLORS, FONTS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {RestaurantAppInstalled} from '../../redux/actions/restaurantAction';

const Installed = ({RestaurantAppInstalled, statusData, navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    fetchInstalledData();
  }, []);

  const fetchInstalledData = async () => {
    setLoading(true); // Show loader when fetching starts
    setRefreshing(true);
    try {
      await RestaurantAppInstalled();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
      setLoading(false); // Hide loader after fetching is complete
    }
  };

  // Function to format the date
  const formatDate = dateString => {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: COLORS.lightGray10,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchInstalledData}
            colors={[COLORS.primary]} // Customize the refresh control color
          />
        }>
        <Text
          style={{
            marginVertical: SIZES.height * 0.025, //20
            fontFamily: FONTS.LexMedium,
            fontSize: SIZES.width * 0.038, //14
            marginLeft: SIZES.width * 0.06,
            color: COLORS.primary,
          }}>
          Installed
        </Text>
        {Array.isArray(statusData) && statusData.length > 0 ? (
          statusData.map((item, index) => (
            <StatusCard
              key={index}
              title={item.name}
              onPress={() =>
                navigation.navigate('Update Restaurant', {resData: item})
              }
              status="Installed"
              date={formatDate(item.updatedAt)} // Format the date
            />
          ))
        ) : (
          <Image
            source={require('../../assets/image/no_results.png')}
            style={{
              marginTop: SIZES.width * 0.3,
              alignItems: 'center',
              justifyContent: 'center',
              width: SIZES.width * 0.6,
              height: SIZES.width * 0.6,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray10,
  },
});

const mapStateToProps = state => ({
  statusData: state.restaurant.restaurantAppInstalled,
});

const mapDispatchToProps = {
  RestaurantAppInstalled,
};

export default connect(mapStateToProps, mapDispatchToProps)(Installed);

// import {StyleSheet, Text, ScrollView} from 'react-native';
// import React, {useEffect} from 'react';
// import StatusCard from '../../components/StatusCard';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import {connect} from 'react-redux';
// import {RestaurantAppInstalled} from '../../redux/actions/restaurantAction';

// const Installed = ({RestaurantAppInstalled, statusData, navigation}) => {
//   useEffect(() => {
//     RestaurantAppInstalled();
//   }, []);

//   // Function to format the date
//   const formatDate = dateString => {
//     const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <ScrollView
//       style={{
//         backgroundColor: COLORS.lightGray10,
//       }}>
//       <Text
//         style={{
//           marginVertical: SIZES.height * 0.025, //20

//           fontFamily: FONTS.LexMedium,
//           fontSize: SIZES.width * 0.038, //14

//           marginLeft: SIZES.width * 0.045,
//           color: COLORS.gray1,
//         }}>
//         Installed
//       </Text>
//       {Array.isArray(statusData) && statusData.length > 0 ? (
//         statusData.map((item, index) => (
//           <StatusCard
//             key={index}
//             title={item.name}
//             onPress={() =>
//               navigation.navigate('Update Restaurant', {resData: item})
//             }
//             status="Installed"
//             date={formatDate(item.updatedAt)} // Format the date
//           />
//         ))
//       ) : (
//         <Text
//           style={{
//             fontFamily: FONTS.LexRegular,
//             fontSize: SIZES.width * 0.038, //14

//             marginLeft: SIZES.width * 0.055,
//             color: COLORS.primary,
//           }}>
//           No data available
//         </Text>
//       )}
//     </ScrollView>
//   );
// };

// const mapStateToProps = state => ({
//   statusData: state.restaurant.restaurantAppInstalled,
// });

// const mapDispatchToProps = {
//   RestaurantAppInstalled,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Installed);
