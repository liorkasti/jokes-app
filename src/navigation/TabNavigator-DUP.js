import React, { useEffect } from 'react';
import { View } from 'react-native-animatable';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Dashboard, JokeForm, JokeList, SupportScreen, ProfileScreen } from '../screens'

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (

  <Tab.Navigator initialRouteName="Dashboard" activeColor="#fff">
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="SupportScreen"
      component={FavoritesStackScreen}

      options={{
        title: "Favorites",
        tabBarLabel: 'Favorites',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default TabNavigator;

const HomeStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Dashboard}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => { }}
              />
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{ uri: 'https://avatars.githubusercontent.com/u/29893163?v=4' }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="JokeList"
        component={JokeList}
        options={({ route, navigation }) => ({
          // title:'',
          // headerBackTitleVisible: false
        })}
      />
    </HomeStack.Navigator>
  );
};

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
          title: '',
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
        fontWeight: 'bold',
      },
    }}>
    <FavoritesStack.Screen
      name="SupportScreen"
      component={SupportScreen}
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
