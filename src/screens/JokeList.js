import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements'

import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import JokeItem from '../components/JokeItem';
import { deleteJoke } from '../actions/joke';
// import data from '../data/jokes.json'

export default function JokeList() {

  useEffect(() => {
    console.log('log params: ', route.params)
  }, [])

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteJoke(key))

  const jokes = useSelector(state => state.jokeReducer.jokeList)

  const useJokes = () => {
    if (route.params.myJokes)
      return useSelector(state => state.jokeReducer.jokeList)
    else
      return route.params.jokes
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <FlatList style={styles.listContainer}
        data={jokes}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={36}
                onPress={() => deleteCurrent(data.item.key)} />
              }
            />
        }
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

    </Background >
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // backgroundColor: '#212121',
    // padding: 16
  },
  listText: {
    // fontSize: 30
  },
});