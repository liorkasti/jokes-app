import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { phoneValidator } from '../helpers/phoneValidator'
import { idValidator } from '../helpers/idValidator'

export default function RegisterScreen({ navigation }) {
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [id, setID] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const phoneError = phoneValidator(phone.value)
    const idError = idValidator(id.value)
    if (idError || phoneError) {
      setID({ ...phone, error: phoneError })
      setPhone({ ...id, error: idError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        autoCapitalize="none"
        // autoCompleteType="phone"
        // textContentType="phone"
        // keyboardType="phone"
      />
      <TextInput
        label="ID"
        returnKeyType="done"
        value={id.value}
        onChangeText={(text) => setID({ value: text, error: '' })}
        error={!!id.error}
        errorText={id.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
