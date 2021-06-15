import React from 'react'
import { FlatList } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

import data from '../data/jokes.json'

export default function TwopartJokes({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Twopart Jokes</Header>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
