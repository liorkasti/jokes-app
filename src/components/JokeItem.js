import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { theme } from '../core/theme'
import Paragraph from './Paragraph'
import JokeText from './JokeText'
import JokeCard from './JokeCard'
import JokeDetails from './JokeDetails'

const JokeItem = (props) => {
  const [showDetails, setShowDetails] = useState(false)
  const [details, setDetails] = useState([])

  useEffect(() => {
    // console.log('log params: ', JSON.stringify(props))
    // if (props.category) { setDetails([...details, { Category: props.category }]) }
    // console.log('log details: ', JSON.stringify(details))

  }, [])

  const fetchDetails = async (item) => {
    try {
      const append = [];
      if (item.category !== null) {
        console.log('log details: ', JSON.stringify(item.category))
        // details.push({ Category: props.category })
        const append = [...details, { Category: props.category }]
        setDetails([...details, { append }]);
        // const append = details.push({Category: props.category})
        // appendCategory(append)
        // return append;            
      } else {
        return;
      }
    } catch (error) {
      console.error('There was an error!', error);
      setErrorFetchMessage('Something went wrong');
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        // mode="outlined"
        onPress={() => {
          setShowDetails(!showDetails)
          // fetchDetails(props)
        }}
      >
        {props.joke ?
          < JokeText >
            {props.joke}
          </JokeText>
          :
          <>
            < JokeText >
              {props.setups}
            </JokeText>
            < JokeText >
              {props.delivery}
            </JokeText>
          </>
        }
        {showDetails &&
          <>
            <Paragraph>
              <Text style={styles.title}>
                Joke details:
                {/* {details} */}
              </Text>
              <Paragraph style={styles.title}>Category: {props.category}, </Paragraph>
              <Paragraph style={styles.title}>Flags:
                {props.flags.sexist &&
                  <Paragraph style={styles.title}>Sexist, </Paragraph>
                }
                {props.flags.nsfw &&
                  <Paragraph style={styles.title}>nsfw, </Paragraph>
                }
                {props.flags.religious &&
                  <Paragraph style={styles.title}>religious, </Paragraph>
                }
                {props.flags.political &&
                  <Paragraph style={styles.title}>political, </Paragraph>
                }
                {props.flags.racist &&
                  <Paragraph style={styles.title}>racist, </Paragraph>
                }
              </Paragraph>
              <TouchableOpacity
                onPress={() => {
                  //TODO: share function            
                }}
              >
                <Icon name='share' style={styles.iconActive} />
              </TouchableOpacity >
              <TouchableOpacity
                onPress={() => {
                  //TODO: suggested function            
                }}
              >
                {/* <Text style={styles.title}>Suggested: </Text> */}
              </TouchableOpacity >
            </Paragraph>
          </>
        }
      </TouchableOpacity >
    </>
  );

}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth * .8,
    color: '#414757',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    color: theme.colors.secondary,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'left',
    paddingTop: 20,
  },

});

export default JokeItem;