import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {COLORS, FONTS, SIZES} from '../../constants';

const DateTimePicker = ({
  text,
  isImage,
  placeholder,
  onChange,
  onSelect,
  value,
}) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  // Function to format the date into time string
  const getTimeString = date => {
    return date
      ? date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      : '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{text}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setOpen(true);
            if (onSelect) {
              onSelect();
            }
          }}
          style={{padding: 6}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              value={value}
              // value={getTimeString(date)}
              placeholder={placeholder}
              placeholderTextColor="#000"
              editable={false} // Make the TextInput non-editable
            />
            {isImage && (
              <Image
                source={require('../../assets/image/TimeLeft.png')}
                style={{
                  width: SIZES.width * 0.055,
                  height: SIZES.width * 0.055,
                  resizeMode: 'cover',
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date || new Date()}
          mode="time"
          onConfirm={selectedDate => {
            setOpen(false);
            setDate(selectedDate);
            onChange(selectedDate); // Call the onChange prop when date is selected
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: SIZES.width * 0.81,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
  },
  inputGroup: {
    // marginBottom: SIZES.width * 0.051, //20

    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  label: {
    color: '#000',
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.036,
    marginBottom: 8,

    // marginBottom: SIZES.height * 0.006, //10
  },
  input: {
    fontFamily: FONTS.LexLight,
    paddingVertical: 0,
    // height: SIZES.height * 0.047,
    borderBottomColor: '#000',
    // borderBottomWidth: 0.5,
    fontSize: SIZES.width * 0.04,
    color: '#000',
    // fontFamily: FONTS.LexThin,
    // paddingVertical: 0,

    // // height: SIZES.height * 0.047,
    // fontSize: SIZES.width * 0.045,
    // color: '#000',
    // opacity: 0.5,
    flexGrow: 1,
  },
});
