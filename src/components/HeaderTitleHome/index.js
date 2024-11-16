import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {SIZES} from '../../constants';

const HeaderTitleHome = () => {
  const [numberOfLines, setNumberOfLines] = useState(0);

  const onTextLayout = event => {
    const {lines} = event.nativeEvent;
    setNumberOfLines(lines.length);
    // console.log('firstLine', lines.length);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: SIZES.width * 0.68,
        height: SIZES.height * 0.1,
      }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/image/drawerIcon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignSelf: 'flex-start', flexDirection: 'column'}}>
        <Text
          style={[
            styles.title,
            numberOfLines > 1 && {marginBottom: 0},
            titleStyle,
          ]}
          onTextLayout={onTextLayout}
          numberOfLines={1}>
          APNA THALI
        </Text>
        <Text
          style={[
            styles.subtitle,
            numberOfLines > 1 && {marginBottom: 0},
            subtitleStyle,
          ]}>
          Id: Rest-02
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/image/qrCode.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/image/walletIcon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/image/notificationIcon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTitleHome;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: SIZES.width * 0.065, //25
    height: SIZES.width * 0.065, //25
  },
});
