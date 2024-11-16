import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  RefreshControl,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StatusCard from '../../components/StatusCard';
import {COLORS, FONTS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {RestaurantFullyOnboard} from '../../redux/actions/restaurantAction';
import Toast from 'react-native-toast-message';

const Onboarded = ({RestaurantFullyOnboard, statusData}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOnboardedData();
  }, []);

  const fetchOnboardedData = async () => {
    setLoading(true);
    setRefreshing(true);
    try {
      await RestaurantFullyOnboard();
    } catch (error) {
      console.error('Error fetching onboarded data:', error);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Function to format the date
  const formatDate = dateString => {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to handle StatusCard press
  const handleCardPress = name => {
    Toast.show({
      type: 'info',
      text1: `${name} `,
      text2: 'Fully Onboarded!',
    });
  };

  if (loading) {
    // Show loader while fetching data
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
            onRefresh={fetchOnboardedData}
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
          Onboarded
        </Text>
        {Array.isArray(statusData) && statusData.length > 0 ? (
          statusData.map((item, index) => (
            <StatusCard
              statusStyle={{color: COLORS.green1}}
              key={index}
              title={item.name}
              status="Onboarded"
              date={formatDate(item.updatedAt)} // Format the date
              onPress={() => handleCardPress(item.name)} // Handle press event
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
  statusData: state.restaurant.RestaurantFullyOnboard,
});

const mapDispatchToProps = {
  RestaurantFullyOnboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarded);

// import {StyleSheet, Text, ScrollView, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import StatusCard from '../../components/StatusCard';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import {connect} from 'react-redux';
// import {RestaurantFullyOnboard} from '../../redux/actions/restaurantAction';
// import {Snackbar} from 'react-native-paper';
// import Toast from 'react-native-toast-message';

// const Onboarded = ({RestaurantFullyOnboard, statusData}) => {
//   // const [visible, setVisible] = useState(false);
//   // const [snackbarMessage, setSnackbarMessage] = useState(null);

//   useEffect(() => {
//     RestaurantFullyOnboard();
//   }, []);

//   // Function to format the date
//   const formatDate = dateString => {
//     const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   // Function to handle StatusCard press
//   const handleCardPress = name => {
//     // setSnackbarMessage(` ${name} is Fully Onboarded`);
//     // setVisible(true);
//     Toast.show({
//       type: 'info',
//       text1: `${name} `,
//       text2: 'Fully Onboarded!',
//     });
//   };

//   const onDismissSnackBar = () => setVisible(false);

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView
//         style={{
//           backgroundColor: COLORS.lightGray10,
//         }}>
//         <Text
//           style={{
//             marginVertical: SIZES.height * 0.025, //20

//             fontFamily: FONTS.LexMedium,
//             fontSize: SIZES.width * 0.038, //14

//             marginLeft: SIZES.width * 0.045,
//             color: COLORS.gray1,
//           }}>
//           Onboarded
//         </Text>
//         {Array.isArray(statusData) && statusData.length > 0 ? (
//           statusData.map((item, index) => (
//             <StatusCard
//               key={index}
//               title={item.name}
//               status="Onboarded"
//               date={formatDate(item.updatedAt)} // Format the date
//               onPress={() => handleCardPress(item.name)} // Handle press event
//             />
//           ))
//         ) : (
//           <Text
//             style={{
//               fontFamily: FONTS.LexRegular,
//               fontSize: SIZES.width * 0.038, //14

//               marginLeft: SIZES.width * 0.055,
//               color: COLORS.primary,
//             }}>
//             No data available
//           </Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   snackbar: {
//     backgroundColor: COLORS.lightGray,
//     borderRadius: 8, // Rounded corners
//     padding: 3, // Padding inside the Snackbar
//     marginHorizontal: 20, // Margins on the sides
//     // color: COLORS.black,
//   },
//   snackbarWrapper: {
//     bottom: 20, // Position the Snackbar 20 pixels from the bottom
//   },
// });

// const mapStateToProps = state => ({
//   statusData: state.restaurant.RestaurantFullyOnboard,
// });

// const mapDispatchToProps = {
//   RestaurantFullyOnboard,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Onboarded);
