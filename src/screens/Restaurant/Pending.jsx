import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StatusCard from '../../components/StatusCard';
import {COLORS, FONTS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {RestaurantPending} from '../../redux/actions/restaurantAction';

const Pending = ({RestaurantPending, statusData, navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader while fetching data
      await fetchPendingData();
      setLoading(false); // Hide loader once data is fetched
    };

    fetchData();
  }, []);

  const fetchPendingData = async () => {
    setRefreshing(true);
    try {
      await RestaurantPending();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false); // Hide the refresh control after fetching
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
    <ScrollView
      style={{
        backgroundColor: COLORS.lightGray10,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={fetchPendingData}
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
        Pending
      </Text>
      {Array.isArray(statusData) && statusData.length > 0 ? (
        statusData.map((item, index) => (
          <StatusCard
            key={index}
            title={item?.name}
            onPress={() =>
              navigation.navigate('Update Restaurant', {resData: item})
            }
            status="Pending"
            date={formatDate(item.updatedAt)}
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
  statusData: state.restaurant.restaurantPending,
});

const mapDispatchToProps = {
  RestaurantPending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);

// import {StyleSheet, Text, ScrollView} from 'react-native';
// import React, {useEffect} from 'react';
// import StatusCard from '../../components/StatusCard';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import {connect} from 'react-redux';
// import {RestaurantPending} from '../../redux/actions/restaurantAction';

// const Pending = ({RestaurantPending, statusData, navigation}) => {
//   useEffect(() => {
//     RestaurantPending();
//   }, []);
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
//         Pending
//       </Text>
//       {Array.isArray(statusData) && statusData.length > 0 ? (
//         statusData.map((item, index) => (
//           <StatusCard
//             key={index}
//             title={item.name}
//             onPress={() =>
//               navigation.navigate('Update Restaurant', {resData: item})
//             }
//             status="Pending"
//             date={formatDate(item.updatedAt)}
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
//   statusData: state.restaurant.restaurantPending,
// });

// const mapDispatchToProps = {
//   RestaurantPending,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Pending);
