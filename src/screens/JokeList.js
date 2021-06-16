import React, { useEffect } from 'react';
import { FlatList } from 'react-native'

import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import JokeItem from '../components/JokeItem';
import data from '../data/jokes.json'

export default function JokeList({ route, navigation }) {

  useEffect(() => {
    // console.log('log params: ', route.params)
  }, [])

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      {route.params.jokeType === 'single' &&
        <>
          <Header>Single Jokes</Header>
          <FlatList
            data={data.filter(joke => (joke.type === 'single'))}
            renderItem={({ item }) => (
              <JokeItem
                {...item}
                data={data}
              />
            )}
            // keyExtractor={item => item.id}
            keyExtractor={({ id }) => id}
          />
        </>
      }{route.params.jokeType === 'twopart' &&
        <>
          <Header>Two Part Jokes</Header>
          <FlatList
            data={data.filter(joke => (joke.type === 'twopart'))}
            renderItem={({ item }) => (
              <JokeItem
                {...item}
                data={data}
              />
            )}
            // keyExtractor={item => item.id}
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
