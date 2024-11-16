import {ScrollView, ActivityIndicator, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import InfoCard from '../../components/InfoCard';
import {connect} from 'react-redux';
import {getTarget} from '../../redux/actions/getTargetAction';
import {GetProfile} from '../../redux/actions/authAction';
import {COLORS} from '../../constants';

const Target = ({targetT, navigation, getTarget}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getTarget();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.safeArea}>
        {(Array.isArray(targetT) ? targetT : []).map((item, index) => (
          <InfoCard
            key={index}
            onPress={() =>
              navigation.navigate('Add Restaurant', {targetT: item})
            }
            location={item?.clusterId?.name || 'Unknown Location'} // Fallback in case location is missing
            // date={item?.date || 'No Date'}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  targetT: state.getTarget?.targetT, // Ensure this matches your state structure
});

const mapDispatchToProps = {
  GetProfile,
  getTarget,
};

export default connect(mapStateToProps, mapDispatchToProps)(Target);
