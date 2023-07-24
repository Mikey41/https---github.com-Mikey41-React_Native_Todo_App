//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
// create a component
const NoteDetail = props => { 
  const {note} = props.route.params
  const headerHeight = useHeaderHeight()
  return (
    <View style={[styles.container, {paddingTop: headerHeight}]}>
      <Text>{note.title}</Text>
      <Text>{note.description}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
  
  },
});

//make this component available to the app
export default NoteDetail;
