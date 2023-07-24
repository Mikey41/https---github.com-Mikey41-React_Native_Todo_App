//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';

// create a component
const NodeInputModel = ({visible, onClose, onSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const handleModalClose = () =>{
    Keyboard.dismiss()
  }
  
  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'description') setDescription(text);
  };
  
  const handleSubmit = () =>{
    if(!title.trim() && !description.trim()) return onClose()
    onSubmit(title,description);
    setTitle('');
    setDescription('');
    onClose();
  };

  const closeModal = () =>{
    setTitle('');
    setDescription('');
    onClose();
  }

  return (
    <>
    <StatusBar hidden/>
  <Modal visible={visible} animationType='fade'>
    <View style={styles.container}>
    <TextInput value={title} onChangeText={(text) => handleOnChangeText(text, 'title')} placeholder='Title' style={[styles.input, styles.title]}/>

    <TextInput 
    value={description}
    multiline
    placeholder='Note' 
    style={[styles.input, styles.description]}
    onChangeText={(text) => handleOnChangeText(text, 'description')}
    />

      <View style={styles.btnContainer} >
        <RoundIconBtn size={15} antIconName='check' onPress={handleSubmit} />
        { title.trim() || description.trim() ?  ( <RoundIconBtn 
        size={15} 
        style={{marginLeft:15}}
        antIconName='close' 
        onPress={closeModal} 
        />): null}
      </View>

    </View>
    
    <TouchableWithoutFeedback onPress={handleModalClose}>
      <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} ></View>
    </TouchableWithoutFeedback>
  </Modal>
  </>
  )
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop:15,
  },
  input: {
  borderBottomWidth: 2,
  borderBottomColor: colors.PRIMARY,
  fontSize: 20,
  color: colors.DARK,
  },
  title:{
    height:40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  description:{
    height:100,
  },
  modalBG:{
    flex: 1,
    zIndex: -1,
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent:'center',
    paddingVertical:15,
  },
});

//make this component available to the app
export default NodeInputModel;
