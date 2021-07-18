import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import NavigationTabs from './tabs'
import { theme } from '../core/theme'
import { StartScreen, LoginScreen, RegisterScreen, Dashboard, JokeList, JokeForm } from '../screens'

const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <Provider theme={theme}>
      {/* <AppContainer /> */}
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="StartScreen"
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="Dashboard" component={NavigationTabs} /> */}
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="JokeList" component={JokeList} />
          <Stack.Screen name="JokeForm" component={JokeForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
