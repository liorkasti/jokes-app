import React from 'react';
import { View } from 'react-native-animatable';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme, Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Dashboard, JokeForm, FavoritesScreen, JokeList, SupportScreen, ProfileScreen } from '../screens'

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesStackScreen}
      options={{
        tabBarLabel: 'Favorites',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={SupportScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold'
      }
    }}>
    <HomeStack.Screen name="Home" component={Dashboard} options={{
      title: 'Dashboard',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: colors.background, // iOS
        elevation: 0, // Android
      },
      headerTintColor: colors.text,
    }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('ProfileScreen')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="ProfileScreen"
        options={{
          title: 'Profile',
        }}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

const FavoritesStackScreen = ({ navigation }) => (
  <FavoritesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold',
      },
    }}>
    <FavoritesStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
      }}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </FavoritesStack.Navigator>
);