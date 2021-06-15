import React from 'react'
import { FlatList } from 'react-native'

import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import JokeItem from '../components/JokeItem';
import data from '../data/jokes.json'

export default function SingleList({ navigation }) {

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Single Jokes: </Header>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <JokeItem
            {...item}
            data={data}
            single={true}
          />
        )}
        // keyExtractor={item => item.id}
        keyExtractor={({ id }) => id}
      />
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
