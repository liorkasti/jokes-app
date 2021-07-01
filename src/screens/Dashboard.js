import React, { useEffect } from 'react';

import useFetch from '../services/hooks/useFetch';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {

  const [loaded, data, single, twopart, init] = useFetch([]);

  useEffect(() => {
    init();
  }, [])


  return (
    <Background>
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
