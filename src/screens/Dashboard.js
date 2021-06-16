import React from 'react'
import { FlatList } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Jokes Gallery</Header>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('JokeList', {jokeType: 'single'})
        }
      >Single Jokes
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('JokeList', {jokeType: 'twoparts'})      }
      >Two-part Jokes
      </Button>

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
