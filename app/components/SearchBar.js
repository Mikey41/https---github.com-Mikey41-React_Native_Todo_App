//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import colors from '../misc/colors';
import{AntDesign} from '@expo/vector-icons'

// create a component
const SearchBar = ({containerStyle, value, onClear , onChangeText}) => {
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput 
      value={value} 
      onChangeText={onChangeText} 
      
      style={ styles.searchBar } 
      placeholder='Search ...' />
      
      {value ? <AntDesign 
      name='close' 
      size={20} 
      color={colors.PRIMARY} 
      onPress={onClear} 
      style={styles.clearIcon}
      /> : null}
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
    justifyContent: 'center'
  },
  clearIcon:{
    position: 'absolute',
    right: 10,
    
  },
});

//make this component available to the app
export default SearchBar;
