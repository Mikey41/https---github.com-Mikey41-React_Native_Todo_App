//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';

// create a component
const Note = ({item, onPress}) => {
  const{ title, description} = item;
  
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.description} numberOfLines={3}>{description}</Text>
    </TouchableOpacity>
    
  );
};


const width = Dimensions.get('window').width-40
// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_LIGHT,
    width: width/2 -10,
    padding: 8,
    borderRadius: 10,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.LIGHT,
  },
  description:{

  },
});

//make this component available to the app
export default Note;
