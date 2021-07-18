import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../components/context';
import { DrawerContent } from './DrawerContent';
import TabNavigator from './TabNavigator';

import NavigationTabs from './tabs'
import { theme } from '../core/theme'
import {
  StartScreen, LoginScreen, Dashboard, JokeForm, JokeList, BookmarkScreen,
  DetailsScreen, ExploreScreen, HomeScreen, ProfileScreen, RegisterScreen,
  SettingsScreen, SignInScreen, SignUpScreen, SplashScreen, SupportScreen
}
  from '../screens'

// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {/* {loginState.userToken === null ? ( */}
          {loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="JokeList" component={JokeList} />
              <Drawer.Screen name="JokeForm" component={JokeForm} />
            </Drawer.Navigator>
          )
            :
            <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

// return (
//   <Provider theme={theme}>
//     {/* <AppContainer /> */}
//     <NavigationContainer>
//       <Stack.Navigator
//         // initialRouteName="StartScreen"
//         // initialRouteName="Dashboard"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Dashboard" component={NavigationTabs} />
//         {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//         {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
//         <Stack.Screen name="JokeList" component={JokeList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </Provider>
// )
// }
