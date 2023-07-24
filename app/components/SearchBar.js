//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import colors from '../misc/colors';


// create a component
const SearchBar = ({containerStyle}) => {
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput style={ styles.searchBar } placeholder='Search Here' />
    </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  searchBar:{
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius:40,
    paddingLeft:15,
    fontSize:20,
  },
  container: {
    paddingHorizontal: 20,

  },
});

//make this component available to the app
export default SearchBar;
