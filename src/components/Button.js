import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    // width: '100%',
    // flex: 1,
    // margin: 15,
    // height: 50,
    borderRadius: 10,
    overflow:
    Platform.OS === 'android' && Platform.Version >= 21
    ? 'hidden'
    : 'visible',
    elevation: 5,

    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.primary
  },
})
