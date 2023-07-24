//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import colors from '../misc/colors';
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';
import NodeInputModel from '../components/NodeInputModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../components/Note';
import { useNotes } from '../context/NoteProvider';



// create a component
const NoteScreen = ({user, navigation}) => {
  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  const {notes, setNotes} = useNotes()
  
  const findGreet = () => {
    const hrs = new Date().getHours();
    if(hrs === 0 || hrs < 12) return setGreet('Morning');
    if(hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening')
  }


  useEffect (() => {
    findGreet();
  }, [])

  const handleOnSubmit = async (title,description) =>{
    const note = {id: Date.now(), title, description, time: Date.now()}
    const updatedNotes = [...notes, note]
    setNotes(updatedNotes)
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const openNote = (note) => {
    navigation.navigate('NoteDetail', {note})
  }

  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        {notes.length ? (<SearchBar containerStyle={{marginVertical: 15}}/>) : null}
        

        <FlatList
        data={notes} 
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between', marginBottom: 15,}}
        keyExtractor={item => item.id.toString()
        } renderItem={({item}) => <Note onPress={() => openNote(item)} item={item}/> } />

        {!notes.length ? (<View  style={[StyleSheet.absoluteFillObject,styles.emptyHeaderContainer]}>
          <Text style={styles.emptyHeader}>Add Notes</Text>
        </View>): null }
      </View>
    </TouchableWithoutFeedback>

    <RoundIconBtn onPress={() => setModalVisible(true)} 
          antIconName='plus' 
          style={styles.addBtn}/>

    <NodeInputModel 
    visible={modalVisible} 
    onSubmit={handleOnSubmit}
    onClose={() => setModalVisible(false)}/>
    </>
  );
};



// define your styles
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal:20,
    flex:1,
    zIndex: 1,
  },
  emptyHeader:{
    fontSize: 30,
    textTransform:'uppercase',
    fontWeight:'bold',
    opacity:0.2,
  },
  emptyHeaderContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    zIndex: -1,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});

//make this component available to the app


export default NoteScreen;
