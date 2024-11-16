import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating-widget';

const index = () => {
  const [rating, setRating] = useState(0);
  return <StarRating rating={rating} onChange={setRating} />;
};

export default index;

const styles = StyleSheet.create({});
