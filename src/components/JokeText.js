import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function JokeText(props) {

  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    color: theme.colors.thirdary,
    // color: props.showDetails && theme.colors.secondary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
