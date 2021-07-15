import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from './src/core/theme'
import { StartScreen, LoginScreen, RegisterScreen, Dashboard, JokeList } from './src/screens'
import AppContainer from './src/navigation';

const Stack = createStackNavigator()

export default function App() {
  return (
    <AppContainer />
    // <Provider theme={theme}>
    //    <NavigationContainer>
    //     <Stack.Navigator
    //       // initialRouteName="StartScreen"
    //       initialRouteName="Dashboard"
    //       screenOptions={{
    //         headerShown: true,
    //       }}
    //     >
    //       <Stack.Screen name="StartScreen" component={StartScreen} />
    //       <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    //       <Stack.Screen name="Dashboard" component={Dashboard} />
    //       <Stack.Screen name="JokeList" component={JokeList} />
    //     </Stack.Navigator>
    //   </NavigationContainer> 
    // </Provider>
  )
}
