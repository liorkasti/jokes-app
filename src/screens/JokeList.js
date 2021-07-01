import React, { useEffect } from 'react';
import { FlatList } from 'react-native'

import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import JokeItem from '../components/JokeItem';
// import data from '../services/data/jokes.json'

export default function JokeList({ route, navigation }) {

  useEffect(() => {
    // console.log('log params: ', route.params.jokes)
  }, [])

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      {route.params.jokes &&
        <>
          <Header>Single Jokes</Header>
          <FlatList
            data={route.params.jokes}
            renderItem={({ item }) => (
              <JokeItem
                {...item}
                data={route.params.jokes}
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </>
      }
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

    </Background >
  )
}