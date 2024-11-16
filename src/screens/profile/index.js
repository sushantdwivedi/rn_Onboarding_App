import {
  Modal,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import SimpleButton from '../../components/simpleButton';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {connect} from 'react-redux';
import {GetProfile} from '../../redux/actions/authAction';
import {LogoutUser} from '../../redux/actions/authAction';
import {http2} from '../../services/api';
import FastImage from 'react-native-fast-image';
import {COLORS, FONTS} from '../../constants';
import Animated from 'react-native-reanimated';

const Profile = props => {
  const {profile, GetProfile, LogoutUser} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const img = profile?.profilePic ? http2 + profile.profilePic : null;

  const fetchProfileData = async () => {
    try {
      await GetProfile();
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <ScrollView
      style={[
        styles.scroll,
        {
          opacity: modalVisible ? 0.2 : 1,
        },
      ]}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={
                img
                  ? {uri: img}
                  : require('../../assets/image/profileAvatar.png')
              }
              resizeMode="contain"
              style={styles.image}
              sharedTransitionTag={'image/user'}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileEdit')}>
              <FastImage
                source={require('../../assets/image/editIcon.png')}
                resizeMode="contain"
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{profile?.name}</Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginVertical: 20,
              ...styles.label,
            }}>
            Ratings ({profile?.rating})
          </Text>
          <StarRatingDisplay
            starStyle={{borderRadius: 10}}
            style={{borderRadius: 10, marginTop: 30}}
            rating={profile?.rating}
          />
        </View>
        <SimpleButton
          containerStyle={styles.button}
          style={styles.textButtom}
          onPress={() => setModalVisible(true)}>
          Logout
        </SimpleButton>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTxt}>Logout !</Text>
              <Text style={styles.modalText}>
                Are you sure you want to logout?
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.closeButtonUnderline}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text
                    style={[
                      styles.textStyle,
                      {color: COLORS.black, fontFamily: FONTS.LexRegular},
                    ]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    LogoutUser();
                  }}>
                  <Text
                    style={[
                      styles.textStyle,
                      {fontFamily: FONTS.LexRegular, color: COLORS.white},
                    ]}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

const mapDispatchToProps = {
  GetProfile,
  LogoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
