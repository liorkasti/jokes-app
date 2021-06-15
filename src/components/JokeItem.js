import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

import Paragraph from './Paragraph'
import Button from './Button'

const JokeItem = props => {

  useEffect(() => {
    // console.log('log params: ', JSON.stringify(props))
  }, [])

  const details = {

  }

  return (
    <View style={styles.container}>
      {props.single ?
        <>
          <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
            content={props.joke}
            details={props}
          >
          </Button>

          <Paragraph
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
            content={props.joke}
          />
          <Text style={styles.title}>{props.joke}</Text>
          {/* <Text style={styles.title}>Joke details:</Text>
      <Text style={styles.title}>Category: {props.category}</Text>
      <Text style={styles.title}>Flags:
        {props.flags.sexist &&
          <Text style={styles.title}>sexist  </Text>
        }
        {props.flags.nsfw &&
          <Text style={styles.title}>nsfw  </Text>
        }
        {props.flags.religious &&
          <Text style={styles.title}>religious  </Text>
        }
        {props.flags.political &&
          <Text style={styles.title}>political  </Text>
        }
        {props.flags.racist &&
          <Text style={styles.title}>racist  </Text>
        }
      </Text>
      <Text style={styles.title}>Suggested</Text> */
          }
        </>
        :
        <>
          <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
          >
            <Text style={styles.title}>{props.joke}</Text>
            {/* <Text style={styles.title}>Joke details:</Text>
      <Text style={styles.title}>Category: {props.category}</Text>
      <Text style={styles.title}>Flags:
        {props.flags.sexist &&
          <Text style={styles.title}>sexist  </Text>
        }
        {props.flags.nsfw &&
          <Text style={styles.title}>nsfw  </Text>
        }
        {props.flags.religious &&
          <Text style={styles.title}>religious  </Text>
        }
        {props.flags.political &&
          <Text style={styles.title}>political  </Text>
        }
        {props.flags.racist &&
          <Text style={styles.title}>racist  </Text>
        }
      </Text>
      <Text style={styles.title}>Suggested</Text> */
            }
          </Button>
        </>
      }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },

});

export default JokeItem;