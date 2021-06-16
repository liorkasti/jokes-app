import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native'
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

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [id, setID] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const phoneError = phoneValidator(phone.value)
    const idError = idValidator(id.value)
    if (phoneError || idError) {
      setPhone({ ...phone, error: phoneError })
      setID({ ...id, error: idError })
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
      <Header>Welcome back.</Header>
      {/* <View style={styles.container}>
        <SafeAreaView> */}
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
          />
        {/* </SafeAreaView>
      </View> */}
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
