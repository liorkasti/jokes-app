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

  useEffect(() => {
  }, [])

  let deliveryFlag = false;

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
          setShowDetails(!showDetails),
            console.log('\n\nlog propssetups: ', (props.setup))
          // fetchDetails(props)
        }}
      >
        {props.type === 'single' ?
          < JokeText deliveryFlag={deliveryFlag}>
            {props.joke}
          </JokeText>
          :
          <>
            < JokeText deliveryFlag={deliveryFlag}>
              {props.setup}
            </JokeText>
          </>
        }

        {!showDetails &&
          <Paragraph style={styles.title}>
            Joke details
          </Paragraph>
        }

        {showDetails &&
          <>
            < JokeText deliveryFlag={true} showDetails={showDetails}>
              {props.delivery}
            </JokeText>


            <Paragraph style={styles.title}>Category: {props.category} </Paragraph>
            {props.flags.sexist || props.flags.nsfw || props.flags.religious || props.flags.political || props.flags.racist &&
              <Paragraph style={styles.title}>Flags: </Paragraph>
            }
            {props.flags.sexist &&
              <Text style={styles.title}>Sexist, </Text>
            }
            {props.flags.nsfw &&
              <Text style={styles.title}>nsfw, </Text>
            }
            {props.flags.religious &&
              <Text style={styles.title}>religious, </Text>
            }
            {props.flags.political &&
              <Text style={styles.title}>political, </Text>
            }
            {props.flags.racist &&
              <Text style={styles.title}>racist, </Text>
            }

            <TouchableOpacity
              onPress={() => {
                //TODO: share function            
              }}
            >
              {/* <Icon name='share' style={styles.iconActive} /> */}
            </TouchableOpacity >
            <TouchableOpacity
              onPress={() => {
                //TODO: suggested function            
              }}
            >
              {/* <Text style={styles.title}>Suggested: </Text> */}
            </TouchableOpacity >

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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default JokeItem;