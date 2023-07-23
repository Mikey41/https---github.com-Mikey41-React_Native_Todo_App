//import libraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, Dimensions } from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const Intro = () => {
    const [name, setName] = useState('')
    const handleOnChangeText = (text) => setName(text);
    
    const handleSubmit = async () => {
      const user = {name: name}
      await AsyncStorage.setItem('user', JSON.stringify(user))
    }
  
    return (
    <>
    <StatusBar />
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
      <TextInput 
      value={name} 
      onChangeText={handleOnChangeText} 
      placeholder='Enter First Name' 
      style={styles.textInput}/>
    {name.trim().length >= 3 ?  
    (<RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />) : null} 
    </View>
    </>
  );
};

const width = Dimensions.get('window').width-50; 


// define your styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput:{
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    width,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 17,
    marginBottom: 15,
  },
  inputTitle:{
    alignSelf:'flex-start',
    paddingLeft: 26,
    marginBottom: 5,
    opacity: 0.5,
  },
});

//make this component available to the app
export default Intro;

