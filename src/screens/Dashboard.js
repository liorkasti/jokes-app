import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'

import useFetch from '../hooks/useFetch';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import CategoriesList from '../components/CategoriesList'

export default function Dashboard({ navigation }) {

  const [loaded, data, single, twopart, init] = useFetch([]);

  useEffect(() => {
    init();
    // console.log('data: ', data);
    // console.log('single: ', single);
    // console.log('twopart: ', twopart);
  }, [])


  return (
    <Background>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <Logo />
      <Header>Jokes Gallery</Header>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('JokeList', { jokes: single })
        }
      >Single Jokes
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('JokeList', { jokes: twopart })}
      >Two-part Jokes
      </Button>

      <CategoriesList />

    </Background>
  )
}