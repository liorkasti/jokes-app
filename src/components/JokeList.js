import React from 'react'
import { FlatList } from 'react-native'

import Background from './Background'
import BackButton from './BackButton'
import Logo from './Logo'
import Header from './Header'
import Button from './Button'
import JokeItem from './JokeItem';
import data from '../data/jokes.json'

export default function JokeList({ navigation }) {

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Single Jokes</Header>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <JokeItem
            {...item}
            data= {data}
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
