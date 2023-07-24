//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import{AntDesign} from '@expo/vector-icons'

// create a component
const NotFound = () => {
  return (
    <View style={ [StyleSheet.absoluteFillObject ,styles.container]}>
      <AntDesign name='frowno' size={90} color='black' />
      <Text style={{marginTop: 20, fontSize: 20}} >Result Not Found</Text>
    </View>

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.5,
  zIndex:-5.
  },
});

//make this component available to the app
export default NotFound;
