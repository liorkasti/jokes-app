import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux';

import { addJoke } from '../actions/joke';
import Button from '../components/Button'

export default function JokeForm({ navigation }) {

  const [joke, setJoke] = useState('')

  const dispatch = useDispatch();

  const submitJoke = (joke) => dispatch(addJoke(joke))

  return (
    <View style={styles.container}>
      <TextInput
        value={joke}
        placeholder='Enter a joke'
        style={styles.jokeInput}
        onChangeText={(joke) => setJoke(joke)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitJoke(joke)
          setJoke('')
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <Button
        mode="outlined"
        // style={{ marginBottom: 16 }}
        onPress={() =>
          setMyJokes(true),
          navigation.navigate('JokeList')
        }>
        My Jokes
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  jokeInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});