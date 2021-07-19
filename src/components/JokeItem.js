import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TouchableRipple } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Share from 'react-native-share';

import { theme } from '../core/theme'
import Paragraph from './Paragraph'
import JokeText from './JokeText'
import JokeCard from './JokeCard'
import JokeDetails from './JokeDetails'
import files from '../assets/filesBase64';

const JokeItem = (props) => {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    console.log('' + props.joke)
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

  const myCustomShare = async () => {
    if (props.type === 'single') {
      const shareOptions = {
        message: `Y! \n ${props.joke}`,
        url: files.appLogo,
      }
    } else {
      const shareOptions = {
        message: `Y! \n setup: ${props.setup}\n\n\n delivery: ${props.delivery}`,
        url: files.appLogo,
      }
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
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
          <>
            < JokeText deliveryFlag={deliveryFlag}>
              {props.joke}
            </JokeText>
          </>
          :
          <>
            < JokeText deliveryFlag={deliveryFlag}>
              {props.setup}
            </JokeText>
          </>
        }


        <TouchableOpacity onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Share with Your Friends</Text>
            <Icon name="share-outline" color="#009387" size={25} />
          </View>
        </TouchableOpacity>

        {/* {!showDetails &&
          <Paragraph style={styles.title}>
            Joke details
          </Paragraph>
        } 
        */}
        {showDetails && props.type === 'twopart' &&
          <>
            < JokeText deliveryFlag={true} showDetails={showDetails}>
              {props.delivery}
            </JokeText>


            {/* <Paragraph style={styles.title}>Category: {props.category} </Paragraph>
            {props.flags.sexist || props.flags.nsfw || props.flags.religious || props.flags.political || props.flags.racist &&
              <Paragraph style={styles.title}>Flags: </Paragraph>
            }
            {props.flags.sexist &&
              <Text style={styles.title}>Sexist  </Text>
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
              <Text style={styles.title}>racist, </Text>
            }

            <TouchableOpacity
              //TODO: More jokes suggeste function            
              onPress={() => {
              }}
            >
            </TouchableOpacity > */}

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
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});

export default JokeItem;